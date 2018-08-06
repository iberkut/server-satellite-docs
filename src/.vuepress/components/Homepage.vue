<template>
  <div class="home">
    <div class="wrapper">
      <div class="avatar">
        <img :src="$withBase(data.avatar)" alt="">
      </div>
      <div class="card">
        <div class="bio">
          <div class="description">
            <Content />
          </div>
        </div>
        <div class="actions">
          <div v-for="item in data.actions">
            <a
              :href="item.link" class="button"
              :target="item.link.startsWith('/')?'':'_blank'"
            >
              {{item.text}}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      data() {
        return this.$page.frontmatter
      }
    }
  }
</script>

<style lang="stylus">
  @import './styles/config.styl'
  body
    .home
      max-width 100%
      background-color $homeBgColor
      min-height calc(100vh - 6rem)
      display flex
      padding 2.4rem 2rem 0
    @media (max-width: $MQMobileNarrow)
      .home
        // padding-left 0
        // padding-right 0
        padding 1rem 0.5rem
  .wrapper
    width 100%
    display: flex
    flex-direction column
    align-items center
    .avatar
      margin 20px 0
      position relative
      z-index 1
      img
        display block
        width 100%
        height auto
        max-width 300px
    .card
      max-width: 600px
      width 100%
      position relative
      top -75px
      padding-top 75px
      margin-left auto
      margin-right auto
      // box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      // border-radius 0.3rem
      text-align center
      .bio
        padding 1em
        .description
          font-size 1.6em
          font-weight 200
          color rgba(0, 0, 0, .7)
          p
            padding 0.8em 0.5em 0
            line-height normal
            -webkit-margin-before 0em
            -webkit-margin-after 0em
            a
              font-weight normal
        @media (max-width: $MQMobileNarrow)
          .description
            font-size 1em
      .actions
        margin-top 40px
        display flex
        flex-direction: row
        justify-content: center
        flex-wrap wrap
        .button
          background-color $btnBgColor
          border none
          border-radius 0.3em
          color white
          padding 0.5em 1em
          margin 1em 0.5em
          font-size 2.1rem
          font-family inherit
          font-weight 400
          text-align center
          text-decoration none
          display inline-block
          -webkit-transition-duration 0.4s /* Safari */
          transition-duration 0.4s
          cursor pointer
          &:hover
            background-color $btnHvColor
        @media (max-width: $MQMobileNarrow)
          .button
            font-size 1.8rem
</style>
