function AddTodo(){
    return (
        <div className="container text-center">
 
        <div className="row kg-row">
          <div className="col-4">
            <input type="text" placeholder="Enter to do here"></input>
          </div>
          <div className="col-3">
            <input type='date'></input>
          </div>
          <div className="col-2">
          <button type="button " className="btn btn-success kg-button">Add</button>
          </div>
        </div>
        </div>
 
    );
}
export default AddTodo;