import style from './style.module.css'  
const AdminLogin = () => {
    return (
        <div>
            <div>
                <form style={{ width: "40%", display: "block", margin: "30vh auto" }}>
                    <input placeholder="Tên đăng nhập" className="cl1 page1-input" type="text" /><br />
                    <input placeholder="Mật khẩu" className="cl1 page1-input" type="text" />

                        <button className="bg2 page1-button">Đăng nhập</button>
                </form>
                <div className={style.footer}>
                    <button>Thoát</button>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;