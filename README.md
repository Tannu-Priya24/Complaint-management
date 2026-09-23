# Auto Center — Complaint Management System (CMS)

[![.NET 6.0](https://img.shields.io/badge/.NET-6.0-512BD4?logo=dotnet&logoColor=white)](https://dotnet.microsoft.com/)
[![Entity Framework Core](https://img.shields.io/badge/EF%20Core-6.0-512BD4?logo=dotnet&logoColor=white)](https://docs.microsoft.com/ef/core/)
[![Database](https://img.shields.io/badge/Database-SQL%20Server-CC292B?logo=microsoft-sql-server&logoColor=white)](https://www.microsoft.com/sql-server)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

An enterprise-grade, web-based customer complaint, service request, and issue resolution tracking platform developed with ASP.NET Core MVC, Entity Framework Core (Code First), and ASP.NET Core Identity.

---

## 📌 Project Overview

The **Auto Center Complaint Management System** provides a centralized, robust portal for managing automotive service issues, customer complaints, and internal department tickets. Designed to streamline communication between clients, service technicians, and management, the platform ensures accountability and transparent issue resolution from ticket creation to final sign-off.

### Core Objectives
- **Centralized Issue Tracking**: Single platform for logging, categorizing, and assigning service and vehicle-related complaints.
- **Role-Based Access Control**: Tailored workflows and granular access permissions for administrators, support staff, and users.
- **Analytical Oversight**: Executive dashboards offering real-time visibility into complaint resolution velocity, backlog, and department workloads.
- **Auditability**: Complete historical audit trails for status changes, user interactions, and attachments.

---

## 🚀 Key Features

- **Complaint Lifecycle Management**: Complete lifecycle tracking with statuses: *New*, *Submitted*, *In Progress*, *Pending*, *Resolved*, *Rejected*, *Blocker*, *Closed*, and *ToDo*.
- **Priority & Categorization**: Configurable priority levels (*Low*, *Medium*, *High*, *Critical*, *Major*) and departmental categories (*Software*, *Hardware*, *Network*, *Commercial*, *Finance*, etc.).
- **Interactive Dashboards**: Highcharts-powered dynamic visualization displaying complaint statuses, ticket resolution trends, and category distribution.
- **Reporting & Export**: Detailed summary reports (*Complaint Status Summary* and *Assigned To Summary*) with dynamic date-range filtering, and export capabilities (PDF export and print via DataTables / jsPDF).
- **Communication & Comments**: Real-time comment threads on complaints to facilitate collaboration between assignees and complainants.
- **File & Attachment Management**: Secure file attachments for diagnostic logs, receipts, photos, and supporting documentation.
- **Role & Access Governance**: Dynamic role-based menu generation and page access authorization.
- **Notification Services**: Configurable email notifications via SMTP and SendGrid integrations.
- **Security & Identity**: ASP.NET Core Identity engine with configurable password policies, lockout protections, and user session management.
- **Activity & Login Audit Logs**: Comprehensive user login history capturing timestamp, browser details, and IP information.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Backend Framework** | ASP.NET Core 6.0 (C#) |
| **Data Access & ORM** | Entity Framework Core 6.0 (Code First Migrations) |
| **Database Engines** | Microsoft SQL Server (default), MySQL / PostgreSQL support |
| **Security & Auth** | ASP.NET Core Identity, Cookie Authentication |
| **Frontend Framework** | ASP.NET Core Razor Pages / MVC Views |
| **UI Theme & Styling** | AdminLTE 3.0.5, Bootstrap 4, FontAwesome 5 |
| **Client Scripting** | Vanilla JavaScript (ES6+), jQuery 3.3+, Toastr, SweetAlert2 |
| **Data Presentation** | DataTables.net (with Buttons, Responsive, and PDF export extensions) |
| **Data Visualization** | Highcharts |
| **PDF Generation** | Rotativa / jsPDF / DataTables PDFMake |

---

## 🏗️ Project Architecture & Structure

The repository follows a clean, modular Model-View-Controller (MVC) architectural layout:

```text
complaint-management-system/
├── Controllers/              # MVC controllers handling HTTP requests and business logic
│   ├── AccountController.cs         # Authentication, registration, and password recovery
│   ├── ComplaintController.cs       # Ticket creation, editing, status changes, attachments
│   ├── DashboardController.cs       # Metrics aggregation and dashboard data feeds
│   ├── ReportController.cs          # Status and assignment report generation
│   ├── UserManagementController.cs  # Administration of user profiles and roles
│   └── ...
├── Data/                     # EF Core DbContext, SeedData, and database initializers
├── Extensions/               # Custom application extensions and middleware helpers
├── Helpers/                  # Utility functions, static constants, and data formatters
├── Migrations/               # Entity Framework Core schema migrations
├── Models/                   # Domain entities and ViewModels (DTOs)
├── Pages/                    # Dynamic role-based navigation menus and route definitions
├── Properties/               # Launch profiles and environment settings
├── Services/                 # Core business services (EmailSender, Roles, AccountService)
├── Views/                    # Razor Views organized by feature domain
│   ├── Shared/               # Layouts (_Adminlte.cshtml), sidebars, headers, footers
│   └── ...
├── wwwroot/                  # Client-side static assets
│   ├── css/                  # Custom CSS stylesheets
│   ├── js/                   # Modular client-side CRUD and DataTable controllers
│   ├── images/               # UI icons, branding, and default avatars
│   └── upload/               # Managed upload repository
├── appsettings.json          # Application configuration, database connections, and settings
├── ComplaintManagementSystem.sln # Visual Studio Solution file
└── ComplaintMngSys.csproj    # .NET project configuration and NuGet dependencies
```

---

## 📋 Prerequisites

Before setting up the application, ensure the following tools are installed:

- **[.NET 6.0 SDK](https://dotnet.microsoft.com/download/dotnet/6.0)** (or .NET SDK 6.0+ / 8.0 / 10.0 with .NET 6 target support)
- **[Microsoft SQL Server 2017+](https://www.microsoft.com/sql-server)** (or SQL Server Express / LocalDB)
- **[Visual Studio 2022](https://visualstudio.microsoft.com/)** (Community edition or higher) with the *ASP.NET and web development* workload, or **Visual Studio Code** with the C# Dev Kit
- Modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox)

---

## ⚙️ Installation & Configuration

### 1. Clone the Repository

```bash
git clone https://github.com/Tannu-Priya24/Complaint-management.git
cd Complaint-management
```

### 2. Configure Database Connection

Open `appsettings.json` and configure your database connection string in the `ConnectionStrings` section:

```json
"ConnectionStrings": {
  "connMSSQLNoCred": "Server=(localdb)\\mssqllocaldb;Database=ComplaintMngSys;Trusted_Connection=True;MultipleActiveResultSets=true",
  "connMSSQL": "Server=YOUR_SQL_SERVER;Database=ComplaintMngSys;User ID=YOUR_USER;Password=YOUR_PASSWORD;MultipleActiveResultSets=true"
}
```

*Note: By default, the application uses `connMSSQL`. To use Windows Authentication with LocalDB or SQL Express, you can set `"DBConnectionStringName": "connMSSQLNoCred"` inside the `ApplicationInfo` section.*

### 3. Apply Database Migrations

You can apply the database schema using either the .NET CLI or Visual Studio Package Manager Console:

#### Option A: .NET CLI
```bash
dotnet ef database update
```

#### Option B: Visual Studio Package Manager Console
```powershell
Update-Database
```

*The application also contains built-in automated seed data routines (`SeedData.cs` and `ProgramTaskExtension.SeedingData(app)`) that initialize essential categories, priorities, and default administrative profiles upon first launch.*

---

## 🏃 Running the Application

### Via .NET CLI

```bash
dotnet run --project ComplaintMngSys.csproj
```

The application will start and listen on configured local ports (typically `https://localhost:5003` and `http://localhost:5002`).

### Via Visual Studio

1. Open `ComplaintManagementSystem.sln` in Visual Studio 2022.
2. Select `ComplaintMngSys` as the startup project.
3. Press **F5** (Debug) or **Ctrl+F5** (Run without debugging).

---

## 🔐 Default Access & User Roles

The system is pre-configured with distinct operational roles:

| Role | Access Scope |
| :--- | :--- |
| **Admin** | Full system governance, user account management, role assignment, system configurations, email settings, audit logs, and global analytics. |
| **Complaint User / Support** | Issue creation, status workflow updates, personal ticket queues, comments, and file attachment handling. |

> **Note**: For initial development and evaluation, default administrative access parameters are configured under `SuperAdminDefaultOptions` in `appsettings.json`. For production deployments, update these options to secure, enterprise-managed credentials.

---

## 📊 Modules & Functionality Overview

### 1. Complaint & Issue Management
- Submit new service tickets with detailed descriptions, priority, department, and file uploads.
- Assign tickets to responsible engineers or staff members.
- Update progress and state transitions with historical audit trail.

### 2. Analytics & Reporting
- Real-time KPI summary widgets for quick situational awareness.
- Status summary reports and assigned-to summary matrices.
- Export summaries to PDF or print-ready layouts.

### 3. User & Access Administration
- Manage staff user profiles, reset credentials, and assign granular page access privileges.
- Configure organization identity, custom branding logos, and contact information.

---

## 🔮 Future Improvements

- [ ] Implementation of RESTful Web APIs with JWT authentication for mobile client integration.
- [ ] Real-time web socket push notifications via ASP.NET Core SignalR.
- [ ] Containerized deployment configuration using Docker and Docker Compose.
- [ ] Automated SMS notification gateway integration for immediate service ticket alerts.

---

## 👨‍💻 Author & Maintainer

- **Developer**: Yugraj Mewara
- **GitHub Repository**: [Tannu-Priya24/Complaint-management](https://github.com/Tannu-Priya24/Complaint-management.git)

---

## 📄 License & Attribution

This project is licensed under the [MIT License](LICENSE).

### Third-Party Components & Attributions
This software incorporates the following open-source frameworks and libraries:
- [AdminLTE 3](https://adminlte.io/) (MIT License)
- [Bootstrap](https://getbootstrap.com/) (MIT License)
- [jQuery](https://jquery.com/) (MIT License)
- [DataTables.net](https://datatables.net/) (MIT License)
- [SweetAlert2](https://sweetalert2.github.io/) (MIT License)
- [Toastr](https://github.com/CodeSeven/toastr) (MIT License)
- [Highcharts](https://www.highcharts.com/) (Highsoft standard licensing)
