import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'colaboracions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('cancion_id').unsigned().references('id').inTable('cancions').onDelete('CASCADE')
      table.integer('artista_id').unsigned().references('id').inTable('artistas').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
