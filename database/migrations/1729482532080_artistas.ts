import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'artistas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre').notNullable()
      table.date('fecha_nacimiento')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
