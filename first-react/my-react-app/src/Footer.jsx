
let date = new Date()
let year = date.getFullYear()


function Footer() {
    return <p className="footerStyle">Copyright {year}</p>
}

export default Footer;