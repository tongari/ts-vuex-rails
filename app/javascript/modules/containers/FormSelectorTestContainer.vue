/* tslint:disable whitespace curly */
<template lang='pug'>
#js-select-test-app
  div
    select(name='register[category_name]' id='register_category_name' v-on:change='onChangeCategorySelect')
      option(v-bind:value='category.id' v-for='category in categories') {{category.name}}

    select(name="register[item_name]" id="register_item_name" ref="itemselect" v-on:change='onChangeItemSelect')
      option(v-bind:value="item.id" v-for="item in items") {{item.name}}

    p {{getCategoryName}}
    p {{getItemName}}
</template>

<script lang='ts'>
  /* tslint:enable whitespace curly */

  import axios from '../lib/Axios'

  export default {
    name: 'FormSelectedTestContainer',
    components: {
    },
    data: function() {
      return {
        message: 'hoge',
        categories: [],
        items: [],
        categoryId: null,
        itemId: null,
      }
    },
    methods: {
      onChangeCategorySelect: function(event): void {
        this.$data.categoryId = Number(event.target.value)
        axios({
          url: `/api/select_search/${event.target.value}`
        }).then((response)=> {
          this.$data.items = response.data.data
        }, (error) =>{})
      },
      onChangeItemSelect: function (event): void {
        this.$data.itemId = Number(event.target.value)
      },
      findNameById: function(elements, searchIndex: number): string {
        for (let i: number = 0; i < elements.length; i++) {
          if (elements[i].id === searchIndex) {
            return elements[i].name
          }
        }
        return elements[0].name
      }
    },

    computed:{
      getCategoryName: function(): string {
        const name: string = this.findNameById(
          this.$data.categories,
          this.$data.categoryId
        )
        return name
      },
      getItemName: function(): string {
        const name: string = this.findNameById(
          this.$data.items,
          this.$data.itemId
        )
        return name
      }
    },
    created() {
      //slimから渡されたjsonをstateにセット
      this.$data.categories = window['__app__']['categories']
      this.$data.items= window['__app__']['items']
    }
  }
</script>

/* tslint:disable whitespace curly */
<style lang='sass' scoped>
</style>

