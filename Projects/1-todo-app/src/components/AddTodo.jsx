function AddTodo(){
    return (
        <div class="container text-center">
 
        <div class="row kg-row">
          <div class="col-4">
            <input type="text" placeholder="Enter to do here"></input>
          </div>
          <div class="col-3">
            <input type='date'></input>
          </div>
          <div class="col-2">
          <button type="button " class="btn btn-success kg-button">Add</button>
          </div>
        </div>
        </div>
 
    );
}
export default AddTodo;