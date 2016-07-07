<!-- { ids:[], language:'CLI', type:'workshop', order: 0, name:'LS Command: List Files', description:'The ls command prints the contents of a directory to the console.' }-->

### Objectives

### Example

### Exercise

1. Use `ls` to print the contents of the present directory.
  - You should see a list of all files and folders, if available, printed to the console.
2. Use `ls` and a single argument to print the contents of your
   home directory (`~`).
  - If your current working directory is your home directory, the output match that of #1.
  - The last argument supplied to `ls` is the directory. When not provided, `ls` assumes the current directory, or `.`.
3. Use `ls` to print the contents of your root directory (`/`).
  - Root is the top-most directory in a Unix-based OS, e.g. Linux, OS X, etc.
4. Use `ls` and supply the optional `l` parameter to list the contents
   of the root directory.
  - The `-l` option prints the contents of a directory in a list format.
5. Use `ls`, `l`, and the `a` parameter to list the contents of the root
   directory (`/`).
  - The `a` parameter includes hidden files, those whose names begin with a period, e.g. `.htaccess`, `.gitconfig`, etc.
6. View more `ls` options by providing the `--help` parameter.
  - Most POSIX-based commands will print a short how-to guide if you supply the `--help` parameter.
