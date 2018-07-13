const gulp = require("gulp");
const tsc = require("gulp-typescript");
const del = require("del");
const runSequence = require("run-sequence");
const rename = require("gulp-rename");
const jeditor = require("gulp-json-editor");
const run = require("gulp-run");
const argv   = require('yargs').argv;
const fs = require("fs");

const now = new Date();
const env = argv.release ? "" : "-beta";
const buildNumber = argv.build ? argv.build : Date.now().toString();

console.log(buildNumber);

//Clean
gulp.task("clean", () => del("tmp"));

//compile src
gulp.task("compile", () => {
    const tscConfig = tsc.createProject("tsconfig.json", {
        target: "es2015",
        module: "commonjs",
        noResolve: false,
        typescript: require("typescript")
    });

    return gulp
        .src(["./src/**/*.ts", '!./src/debug/**/*.*'])
        .pipe(tscConfig())
        .on("error", (err) => process.exit(1))
        .pipe(gulp.dest("./tmp/"));
});

gulp.task("copy", () => {
    const streams = [];

    const tasksFilesCopyStream = gulp
                            .src(["./tasks/**/*.*"])
                            .pipe(gulp.dest("./tmp/tasks"));

    const manifestCopyStream = gulp
                                .src("./vss-extension.json")
                                .pipe(jeditor((json) => {
                                    json.id = `rust-vsts${env}`;
                                    json.version = json.version.replace("{buildNumber}", buildNumber);
                                    return json;
                                }))
                                .pipe(gulp.dest("./tmp/"));

    const ressourceCopyStream = gulp
                                .src(["./DETAILS.md", "./LICENSE", "./icon.png"])
                                .pipe(gulp.dest("./tmp/"));

    streams.push(tasksFilesCopyStream);
    streams.push(manifestCopyStream);

    const files = fs.readdirSync("./tmp/");

    files.forEach((file) => {
        const source = `./tmp/${file}`;
        const stat = fs.statSync(source);

        if (stat && stat.isFile()) {
            const target = `./tmp/tasks/${file.replace(/\.[^/.]+$/, "")}`;
            const stream = gulp
                .src(source)
                .pipe(rename("index.js"))
                .pipe(gulp.dest(target));
            streams.push(stream);
            streams.push(del(source));
        }
    });
    return streams;
});

gulp.task("install", () => {
    return [
        run("npm install vsts-task-lib --prefix ./tmp/tasks/install").exec(),
        run("npm install vsts-task-lib --prefix ./tmp/tasks/cargo").exec()
    ]
});

gulp.task("package", () => {
    return run("tfx extension create --manifest-globs ./tmp/vss-extension.json --output-path ./dist").exec()
});

//Default
gulp.task("default", (cb) => runSequence("clean", "compile", "copy", "install", cb));