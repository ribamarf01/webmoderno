import Layout from "./components/Layout";
import Tabela from "./components/Tabela"
import Cliente from "../core/Cliente"
import Botao from "./components/Botao";
import Formulario from "./components/Formulario";

export default function Inicio() {

    const clientes = [
        new Cliente('Ana', 34, '312312'),
        new Cliente('João', 34, '123'),
        new Cliente('MARCELO', 34, '3123432'),
        new Cliente('Dino Sauro', 34, '6532')
    ]

    function clienteSelecionado(cliente: Cliente) {
        console.log(cliente.nome)
    }

    function clienteExcluido(cliente: Cliente) {

    }

    return (
        <div className={`
            flex justify-center items-center h-screen
            bg-gradient-to-r from-blue-500 to-purple-500
            text-white
        `}>
            <Layout titulo="Cadastro Simples">
                <div className='flex justify-end'>
                    <Botao cor="green" className="mb-4">Novo Cliente</Botao>
                </div>
                {/* <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido} /> */}
                <Formulario />
            </Layout>
        </div>
    )
}