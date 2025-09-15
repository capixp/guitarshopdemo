export default function Guitar({guitar,addToCart}){

    const {id,name,image,description,price} = guitar
    const handleClick = (guitar)=>{
        
    }
    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                <div className="col-4">
                    <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
                </div>
                <div className="col-8">
                    <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                    <p>{description}</p>
                    <p className="fw-black text-primary fs-3">${price}</p>
                    <button
  type="button"
  className="btn btn-dark w-100"
  onClick={(e) => {
    addToCart(guitar);

    const btn = e.currentTarget;         // ✅ guarda la referencia ya!
    if (!btn) return;

    // (opcional) reiniciar si la clase ya estaba
    btn.classList.remove('btn-animate');
    // btn.offsetWidth && btn.offsetWidth; // truco para forzar reflow si quieres
    btn.classList.add('btn-animate');

    setTimeout(() => {
      // usa la referencia guardada, no el evento
      btn.classList.remove('btn-animate');
    }, 500);
  }}
>
  Agregar al Carrito
</button>
                </div>
            </div>
    )
}