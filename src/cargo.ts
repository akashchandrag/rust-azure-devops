import {
    exec,
    getInput,
    setResult,
    TaskResult,
    which,
} from "vsts-task-lib";

import executeCommand from "./common/executeCommand";

(async (command, args) => {
    try {
        await executeCommand("cargo", command, args);
        setResult(TaskResult.Succeeded, "Task done!");
    } catch (e) {
        setResult(TaskResult.Failed, e.message);
    }
})(
    getInput("cargoCommand"),
    getInput("cargoCommandArguments"),
);
