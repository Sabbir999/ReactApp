function TodoItem2(){
    let item="OOP"
    let date="10/4/2024"

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
export default TodoItem2;