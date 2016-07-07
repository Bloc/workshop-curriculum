<!-- { ids:[], language:'CLI', type:'workshop', order: 3, name:'Make Directory with Options', description:'Learn how to create directories with specifications.' } -->

### Objectives

After this exercise you should be able to:

Apply the `-p` option to create parent directories for a given directory.
Apply the `-v` option to display each directory created with a mkdir command.

### Example

Unix commands have default functionality, but also allow us to provide optional parameters which change the behavior of the command. An option is specified after the command:

```bash
$ mkdir -v usa/los-angeles
```

We specified the `-v` option while creating a subdirectory of `/usa`, which returns the directory name we just created. We can also create parent directories by specifying an option:

```bash
$ mkdir -p japan/tokyo
```

If we didn't specify the `-p` option, we would've received an error that stated:

```bash
mkdir: japan: No such file or directory
```

But because we passed a `-p` option, the `/japan` directory was created at the same time as its `/tokyo` subdirectory.

### Exercise

1. Change into the parent of your country directory.
2. Create a new country directory with a city subdirectory using the `-p` option.
