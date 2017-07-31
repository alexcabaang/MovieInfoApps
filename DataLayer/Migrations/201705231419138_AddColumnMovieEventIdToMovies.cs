namespace DataLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddColumnMovieEventIdToMovies : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.movies", "MovieEventId", m => m.Int());
            CreateIndex("dbo.Movies", "MovieEventId");
            AddForeignKey("dbo.Movies", "MovieEventId", "dbo.MovieEvents", "id");
        }

        public override void Down()
        {
            DropForeignKey("dbo.Movies", "MovieEventId", "dbo.MovieEvents");
            DropIndex("dbo.Movies", new[] { "MovieEventId" });
            DropColumn("dbo.Movies", "MovieEventId");
        }
    }
}
