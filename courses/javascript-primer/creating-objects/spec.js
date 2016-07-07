test("Create a Bloc Student", function(assert) {
  assert.ok(protoStudent.isPrototypeOf(blocStudent), "blocStudent should inherit from protoStudent");
  assert.equal(blocStudent.learn("Frontend Web Development"), "The Bloc student is learning Frontend Web Development", "blocStudent.learn('Frontend Web Development') should return 'The Bloc student is learning Frontend Web Development'");
});
