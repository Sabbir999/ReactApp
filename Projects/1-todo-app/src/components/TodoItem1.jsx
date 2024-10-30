function TodoItem1(){
    let item="Learning Array"
    let date="10/5/2024"

    return (
        <div class="container ">
   <div class="row kg-row">
    <div class="col-4">
      {item}
    </div>
    <div class="col-3">
      {date}
    </div>
    <div class="col-2">
    <button type="button " class="btn btn-danger kg-button">Delete</button>
    </div>
  </div>
  </div>

    );
}
export default TodoItem1;