namespace DataLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DeleteColumnMovieEventIdToMovies : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Movies", "MovieEventId", "dbo.MovieEvents");
            DropIndex("dbo.Movies", new[] { "MovieEventId" });
            DropColumn("dbo.Movies", "MovieEventId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.movies", "MovieEventId", m => m.Int());
            CreateIndex("dbo.Movies", "MovieEventId");
            AddForeignKey("dbo.Movies", "MovieEventId", "dbo.MovieEvents", "id");
        }
    }
}
