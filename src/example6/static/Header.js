import {Outlet,Link} from 'react-router-dom';

let HeaderComponent = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div class="container-fluid">
                    <Link class="navbar-brand fw-bold" to="/">OES</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Help!</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Faqs</Link>
                            </li>
                        </ul>
                        <div class="d-flex">
                            <Link className="btn btn-light fw-bold btn-sm" to="/login">login</Link>
                            <Link className="btn btn-primary fw-bold btn-sm ms-2" to="/">logout</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    )
}

export default HeaderComponent;