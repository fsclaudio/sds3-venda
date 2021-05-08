import BarChart from "assets/components/BarChart";
import DataTable from "assets/components/DataTable";
import Footer from "assets/components/Footer";
import NavBar from "assets/components/NavBar";
import DonutChart from "assets/DonutChart";

const DashBoard = () => {

    return (

        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3" >Dashboard de Vendas</h1>

                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secundary">Taxa de Sucesso (%)</h5>
                        <BarChart />
                    </div>

                    <div className="col-sm-6">
                        <h5 className="text-center text-secundary">Todas as Vendas</h5>
                        <DonutChart />
                    </div>

                </div>

                <div className="py-3">
                    <h2 className="text-primary"> Todas as Vendas</h2>

                </div>

                <DataTable />
            </div>
            <Footer />
        </>
    );

}

export default DashBoard;