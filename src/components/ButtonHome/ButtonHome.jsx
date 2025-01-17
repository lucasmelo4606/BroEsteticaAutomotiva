import "./ButtonHome.css"

export const ButtonHome = ({BHome, WhatsApp } ) =>{

    return(

        <div id="buttonHome">
            <button  onClick={WhatsApp} className="ButHome"> {BHome} </button>

        </div>
    )
}