import process from "process";
import path from "path";
import fs from "fs";

/**
 * getCurrentDirectory() -> String
 * Gets path of current working directory
 *
 * Returns current directory as path
 **/
function getCurrentDirectory(){
	return process.cwd();
};

/**
 * checkIfDirectoryExists(filepath) -> Boolean
 * - filepath(String): a directory's path
 *
 * Returns a truthy value if directory exists or not
 **/
function checkIfDirectoryExists(filepath:string){
	try{
		return fs.statSync(filepath).isDirectory();
	}catch(err){
		return false;
	};
};

export { getCurrentDirectory,checkIfDirectoryExists };