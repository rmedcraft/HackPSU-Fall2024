import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Journals from "../components/journals";

export default function Home() {

    return (<>
        <Header title="Rowan's Journal" />
        <Journals />
        <Footer />
    </>)
}