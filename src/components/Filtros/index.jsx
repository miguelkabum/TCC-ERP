import React from "react";
import { useState } from "react";
import style from "./style.module.css"

const index = () => {
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
    <div className={style.container}>
      <aside className={style.filterPanel}>
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
        <button className={style.addClient}>Filtrar</button>
      </aside>
    </div>
  );
};
export default index;
