 function Header(){
    const Reload = () => {
      window.location.reload()};
    return(
  
  
       <nav className="burger navbar navbar-expand-lg bg-light">
    <div className="container-fluid headerBar">
      <div >
        <h2 className="d-flex justify-content-center text-dark">Flag Quiz Game</h2>
      </div>
      <div className="btn">
      <button type="button" onClick={Reload} className="btn btn-primary">Reset Game
      </button>
  
      </div>
    </div>
  </nav>
  
    );
  }
  export default Header