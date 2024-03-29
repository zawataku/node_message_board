import React from "react";
import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();

    const handleLogout = (e) => {
        e.preventDefault();

        // Cookieを削除
        document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

        // ログアウト後のリダイレクト先を指定
        router.push('/');
    };

    return (
        <div className="navbar bg-base-100 sticky top-0 z-50">
            <div className="navbar-start">
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-2xl">KIT Message Board</a>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a onClick={handleLogout}>ログアウト</a></li>
                        <li><a>設定</a></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;