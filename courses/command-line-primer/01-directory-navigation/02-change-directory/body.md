<!-- { ids:[], language:'CLI', type:'workshop', order: 1, name:'Change Directory', description:'Learn how to traverse your operating system's directory structure.' } -->

### Objectives

After this exercise you should be able to:

- Understand how to change directories in Unix.
- Understand how to change into a specific subdirectory.
- Understand how to change into a specific parent directory.
- Understand how to change into the home directory.

### Example

When we feel adventurous enough to leave our home directory, we'll need a way to travel. The "change directory" command allows us to move to a specified directory. It's the equivalent of clicking on a folder in a GUI.

Changing a directory is accomplished with the `cd` command. We can travel in different directions with `cd`, for example:

- `cd ..` moves up a level, to a parent directory.
- `cd [directory name]` moves down a level, to the specified child directory.
- `cd ../ [directory name]` moves to the specified sibling directory.
- `cd ~` moves to the home directory.

> You'll notice that we use "parent", "child", and "sibling" to describe a directory tree. These are useful terms in that they represent the relative location of a directory, and its relationship with surrounding directories. Child directories are also referred to as subdirectories – the terms can be used interchangeably.

### Exercise

1. Change your directory to the parent directory of your current directory.
2. Change your directory to a child of your current directory.
3. Change your directory into a sibling of your current directory.
4. Change your directory to the home directory.
