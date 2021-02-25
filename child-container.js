
function ChildContainer(Props) {
  {
    return Props.giphyArray.map((item) => {
      return (
        <div className="col-sm-4" key={item.id}>
          <div className="card">
            <div className="card-body">
              <div>
                <img src={item.images.fixed_width.url} />
              </div>
            </div>
          </div>
        </div>
      );
    })
  }
}

export default ChildContainer;
