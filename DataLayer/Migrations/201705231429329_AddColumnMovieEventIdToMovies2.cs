namespace DataLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddColumnMovieEventIdToMovies2 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.movies", "MovieEvent_Id", m => m.Int());
            CreateIndex("dbo.Movies", "MovieEvent_Id");
            AddForeignKey("dbo.Movies", "MovieEvent_Id", "dbo.MovieEvents", "id");
        }

        public override void Down()
        {
            DropForeignKey("dbo.Movies", "MovieEvent_Id", "dbo.MovieEvents");
            DropIndex("dbo.Movies", new[] { "MovieEvent_Id" });
            DropColumn("dbo.Movies", "MovieEvent_Id");
        }
    }
}
