
let date = new Date()
let year = date.getFullYear()

let footerStyle = {
    textAlign: "Center",
    color: "lightgrey",
    fontFamily: "Helvetica",
    marginBottom: "10px"
}


function Footer() {
    return <p style={footerStyle}>Copyright {year}</p>
}

export default Footer;