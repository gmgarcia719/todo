import { TodoModel } from './todo.model';

describe('TodoModel', () => {
  it('should create an instance', () => {
    expect(new TodoModel()).toBeTruthy();
  });

  it('should accept calues in the constructor', () => {
    let todo = new TodoModel({
      title: 'hello',
      complete: true
    });
    expect(todo.title).toEqual('hello');
    expect(todo.complete).toEqual(true);
  })
});


