class AddDataToMessage < ActiveRecord::Migration[5.0]
  def change
    add_column :messages, :email, :string
    add_column :messages, :subject, :string
    add_column :messages, :content, :text
  end
end
