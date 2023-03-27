using System;
namespace ListaccTechApp.ViewModels
{
	public class AuthResult
	{
		public string? TokenString { get; set; }
        public DateTime? Expire_At { get; set; }
		public string? Jwt_Id { get; set; }

    }
}

