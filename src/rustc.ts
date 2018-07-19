import {
    getInput,
    setResult,
    TaskResult,
} from "vsts-task-lib";

import executeCommand from "./common/executeCommand";

(async (command, args) => {
    try {
        await executeCommand("rustc", command, args);
        setResult(TaskResult.Succeeded, "Task done!");
    } catch (e) {
        setResult(TaskResult.Failed, e.message);
    }
})(
    getInput("rustcCommand"),
    getInput("rustcCommandArguments"),
);
