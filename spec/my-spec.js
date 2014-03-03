describe("join", function() {
  it("should combine numbers of an array with a string", function() {
    expect(join([1,2,3],'or')).toEqual('1 or 2 or 3');
  });
  it("should handle empty strings", function(){
    expect(join(["a","b","c"],'')).toEqual('a  b  c');
  });
  it("should handle int joiners", function(){
    expect(join(["1","2",3],1)).toEqual('1 1 2 1 3')
  })
});