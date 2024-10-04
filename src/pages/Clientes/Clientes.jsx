import React, { useState } from 'react';
import './Clientes.css';

const clients = [
  { codigo: '10101010', nome: 'Cliente 1', cpf: '100.111.001-11', cidade: 'São Paulo', telefone: '(11) 987-654-321' },
  { codigo: '10101010', nome: 'Cliente 1', cpf: '100.111.001-11', cidade: 'São Paulo', telefone: '(11) 987-654-321' },
  { codigo: '10101010', nome: 'Cliente 1', cpf: '100.111.001-11', cidade: 'São Paulo', telefone: '(11) 987-654-321' },
  // Repita para outros clientes
];

function Clientes() {
  const [filter, setFilter] = useState({
    situacao: 'Todos',
    vendedor: 'Todos',
    telefone: 'Todos',
    estado: 'Sp',
    municipio: 'Todos',
  });

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <aside className="filter-panel">
        <h2>Filtros</h2>
        <div>
          <label>Situação</label>
          <select name="situacao" value={filter.situacao} onChange={handleFilterChange}>
            <option>Todos</option>
            <option>Ativo</option>
            <option>Inativo</option>
          </select>
        </div>
        <div>
          <label>Vendedor</label>
          <select name="vendedor" value={filter.vendedor} onChange={handleFilterChange}>
            <option>Todos</option>
            <option>Vendedor 1</option>
            <option>Vendedor 2</option>
          </select>
        </div>
        <div>
          <label>Telefone / Celular</label>
          <input name="telefone" value={filter.telefone} onChange={handleFilterChange} placeholder="Todos" />
        </div>
        <div>
          <label>Estado</label>
          <input name="estado" value={filter.estado} onChange={handleFilterChange} placeholder="Sp" />
        </div>
        <div>
          <label>Município</label>
          <input name="municipio" value={filter.municipio} onChange={handleFilterChange} placeholder="Todos" />
        </div>
        <button>Filtrar</button>
      </aside>

      <main className="client-table">
        <header>
          <h1>Cliente</h1>
          <button className="add-client">+ Incluir Cliente</button>
        </header>
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>CPF/CNPJ</th>
              <th>Cidade</th>
              <th>Telefone</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={index}>
                <td>{client.codigo}</td>
                <td>{client.nome}</td>
                <td>{client.cpf}</td>
                <td>{client.cidade}</td>
                <td>{client.telefone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Clientes;
