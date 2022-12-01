import logo from '../src/static/logo.png';

export default function Header() {
    return <>

        <div className="p-2 d-flex justify-content-start" style={{ backgroundColor: "maroon"}}>
            <h3 className="align-self-center" style={{ color: "white", marginLeft: "5%"}}>Newspaper Problem</h3>
            <div className="d-flex justify-content-end" style={{ marginLeft: "auto", marginRight: "6%"}}>
                <img src={logo} width="60" height="85" />
            </div>
        </div>

    </>
}

