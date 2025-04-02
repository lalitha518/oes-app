const FooterComponent = () => {
    return (
        <footer className="bg-dark text-light text-center py-3">
            <p className="mb-0">Smart Online Examination System | <span className="fw-bold">© OES v1.0</span></p>
            <p className="mb-0">
                <a href="/terms" className="text-light me-3">Terms of Service</a>
                <a href="/privacy" className="text-light">Privacy Policy</a>
            </p>
        </footer>
    );
};

export default FooterComponent;
