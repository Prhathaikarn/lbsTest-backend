module.exports = (sequelize, DataTypes) => {
    const Data = sequelize.define(
        "Data",
        {
          text: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        },
        {
          underscored: true,
        }
      );
      
      return Data
}