<template>
  <aside class="col-12 col-md-2 p-0 bg-light flex-shrink-1">
    <nav
      class="navbar navbar-expand navbar-light flex-md-column flex-row align-items-start py-2"
    >
      <div class="collapse navbar-collapse ">
        <ul
          class="flex-md-column flex-row navbar-nav w-100 justify-content-between"
        >
          <li class="nav-item">
            <a class="nav-link pl-0 text-nowrap" href="#">
              <i class="fa fa-users fa-fw"></i>
              <span class="font-weight-bold">Amigos</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link pl-0" href="#">
              <i class="fa fa-book fa-fw"></i>
              <span class="d-none d-md-inline">Dashboard</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link pl-0" href="#">
              <i class="fa fa-list-ul fa-fw"></i>
              <span class="d-none d-md-inline">Listar</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link pl-0" href="#">
              <i class="fa fa-user-plus fa-fw"></i>
              <span class="d-none d-md-inline">Crear</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "AsidebarFriends"
};
</script>
