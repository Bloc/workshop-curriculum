# Workshop Curriculum

This repo tracks all courses and exercises for the [Workshop](https://workshop.bloc.io) platform.

Content for each course can be found in [`/courses/`](https://github.com/Bloc/workshop-curriculum/tree/master/courses).

## Contributing

[Contribution guidelines for Workshop exercises](https://github.com/Bloc/workshop-curriculum/blob/master/CONTRIBUTING.md).

## Metadata

> This section is for repo admins only. Currently, only members of Bloc's Curriculum Team are designated as admins. The Curriculum Team will review all issues and pull requests, and insert metadata as appropriate. **All other contributors can ignore this section.**

Each exercise requires a `body.md` file which defines the challenges the student must complete. At the top of each exercise you must include metadata. Here's an example:

```
<!-- { ids:[9], language:'CLI', type:'workshop', order: 0, name:'PWD Command: Print Working Directory', description:'The pwd command displays your active directory and is among the most primitive command line operations.' }-->
```

| Field | Description |
| :-- | :-- |
| `ids` | The exercise identifier as a single-entry array. Find the id by navigating to the exercise (you must create the exercise first). |
| `language` | The language, present options include: `CLI`, `Ruby`, and `JavaScript`. |
| `type` | **You must set this to 'workshop.'** Otherwise, [bad things will happen](http://i.kinja-img.com/gawker-media/image/upload/jhfgudv0sjqdxd2plxq6.gif). |
| `order` | The order in which the exercises will appear on workshop. |
| `name` | The title of the exercise, keep it short and to the point. |
| `description` | Describe the exercise in a bit more detail. What will this exercise reinforce? |
