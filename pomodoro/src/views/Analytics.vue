<template lang="pug">
  #analytics
    b-container.vh-100
        b-row
          b-col(cols='12')
            b-card(title='Card Title' no-body).bg-transparent
              b-card-header(header-tag='nav')
                b-row
                  b-col(cols='6')
                    b-nav(card-header tabs).align-items-end
                      //-  <b-nav-item>'s with child routes. Note the trailing slash on the first <b-nav-item>
                      b-navbar-brand.h1.mr-auto.font-analytics  analytics
                      b-nav-item(to='/analytics/') Today
                      b-nav-item(to='/analytics/weekly') Weekly
              b-card-body
                  router-view
</template>
