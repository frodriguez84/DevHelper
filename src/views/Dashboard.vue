<template>
  <div class="container">
    <h1>{{ titulo }}</h1>

    <div>
      <h3>Juego mas caro en desarrollar</h3>
    </div>

    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">Titulo</th>
          <th scope="col">Genero</th>
          <th scope="col">Monto</th>
          <th scope="col">Creador</th>
        </tr>
      </thead>
        <tbody>
            <tr >
                <td>
                    <span>titulo</span>
                </td>
                <td>
                    <span>genero</span>
                </td>
                <td>
                    <span>monto</span>
                </td>
                <td>
                    <span>creador</span>
                </td>
            </tr>
        </tbody>



    </table>
  </div>
</template>


<script>

import { mapGetters } from "vuex";
export default ({
  computed: {
    ...mapGetters({ listaProyectos: "getProyectos" }),
    ...mapGetters({ usuarios: "getUsuarios" }),
    ...mapGetters({ usuarioLogeado: "getUsuarioLogeado" }),
  },

  data() {
    return {
      titulo: "Dashboard",
    };
  },
});
</script>

