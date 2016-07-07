var protoStudent = {
  learn: function(subject) {
    return "The " + this.type + " student is learning " + subject;
  }
};

var blocStudent = Object.create(protoStudent);
blocStudent.type = "Bloc";

blocStudent.learn("Frontend Web Development");
