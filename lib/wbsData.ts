export interface Activity {
  id: string;
  name: string;
  description?: string;
  duration?: string;
  resources?: string;
  risks?: string;
  dependencies?: string[];
}

export interface WBSNode {
  id: string;
  name: string;
  type: 'phase' | 'workpackage' | 'activity';
  level: number;
  children?: WBSNode[];
  activity?: Activity;
}

// Generated from wbs.md hierarchy
export const wbsData: WBSNode = {
  "id": "parkee-root",
  "name": "Parkee",
  "type": "phase",
  "level": 0,
  "children": [
    {
      "id": "node-1",
      "name": "PHASE 1: INITIATION",
      "type": "phase",
      "level": 1,
      "children": [
        {
          "id": "node-2",
          "name": "Project Conceptualization",
          "type": "workpackage",
          "level": 2,
          "children": [
            {
              "id": "node-3",
              "name": "Problem Statement",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-4",
                  "name": "Identify urban parking inefficiencies (limited slots, lack of real-time data, illegal parking)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-1",
                    "name": "Identify urban parking inefficiencies (limited slots, lack of real-time data, illegal parking)",
                    "description": "Identify urban parking inefficiencies (limited slots, lack of real-time data, illegal parking)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-5",
                  "name": "Define target users (motorists, establishments, LGUs)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-2",
                    "name": "Define target users (motorists, establishments, LGUs)",
                    "description": "Define target users (motorists, establishments, LGUs)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-6",
                  "name": "Establish the need for a smart parking and reservation system",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-3",
                    "name": "Establish the need for a smart parking and reservation system",
                    "description": "Establish the need for a smart parking and reservation system",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-7",
              "name": "Project Scope",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-8",
                  "name": "Define system coverage (mobile app, enterprise dashboard, backend system)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-4",
                    "name": "Define system coverage (mobile app, enterprise dashboard, backend system)",
                    "description": "Define system coverage (mobile app, enterprise dashboard, backend system)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-9",
                  "name": "Identify included features (reservation, payment, real-time availability, analytics)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-5",
                    "name": "Identify included features (reservation, payment, real-time availability, analytics)",
                    "description": "Identify included features (reservation, payment, real-time availability, analytics)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-10",
                  "name": "Define limitations (geographic scope, pilot areas, supported integrations)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-6",
                    "name": "Define limitations (geographic scope, pilot areas, supported integrations)",
                    "description": "Define limitations (geographic scope, pilot areas, supported integrations)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-11",
              "name": "Project Objectives",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-12",
                  "name": "Improve parking efficiency and reduce congestion",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-7",
                    "name": "Improve parking efficiency and reduce congestion",
                    "description": "Improve parking efficiency and reduce congestion",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-13",
                  "name": "Enable real-time parking monitoring and reservation",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-8",
                    "name": "Enable real-time parking monitoring and reservation",
                    "description": "Enable real-time parking monitoring and reservation",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-14",
                  "name": "Provide a scalable and data-driven parking management solution",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-9",
                    "name": "Provide a scalable and data-driven parking management solution",
                    "description": "Provide a scalable and data-driven parking management solution",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-15",
              "name": "Project Deliverables",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-16",
                  "name": "Customer mobile/web application",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-10",
                    "name": "Customer mobile/web application",
                    "description": "Customer mobile/web application",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-17",
                  "name": "Enterprise/admin dashboard",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-11",
                    "name": "Enterprise/admin dashboard",
                    "description": "Enterprise/admin dashboard",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-18",
                  "name": "Backend system and APIs",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-12",
                    "name": "Backend system and APIs",
                    "description": "Backend system and APIs",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-19",
                  "name": "Integrated parking datasets and analytics reports",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-13",
                    "name": "Integrated parking datasets and analytics reports",
                    "description": "Integrated parking datasets and analytics reports",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "node-20",
          "name": "Feasibility Study",
          "type": "workpackage",
          "level": 2,
          "children": [
            {
              "id": "node-21",
              "name": "Legal Feasibility",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-22",
                  "name": "Business Registration Requirements",
                  "type": "workpackage",
                  "level": 4,
                  "children": [
                    {
                      "id": "node-23",
                      "name": "Department of Trade and Industry (DTI) – for sole proprietorship",
                      "type": "activity",
                      "level": 5,
                      "activity": {
                        "id": "act-14",
                        "name": "Department of Trade and Industry (DTI) – for sole proprietorship",
                        "description": "Department of Trade and Industry (DTI) – for sole proprietorship",
                        "duration": "TBD",
                        "resources": "TBD",
                        "risks": "TBD",
                        "dependencies": []
                      }
                    },
                    {
                      "id": "node-24",
                      "name": "Securities and Exchange Commission (SEC) – for partnerships/corporations",
                      "type": "activity",
                      "level": 5,
                      "activity": {
                        "id": "act-15",
                        "name": "Securities and Exchange Commission (SEC) – for partnerships/corporations",
                        "description": "Securities and Exchange Commission (SEC) – for partnerships/corporations",
                        "duration": "TBD",
                        "resources": "TBD",
                        "risks": "TBD",
                        "dependencies": []
                      }
                    },
                    {
                      "id": "node-25",
                      "name": "Bureau of Internal Revenue (BIR) – Tax Identification Number (TIN), official receipts",
                      "type": "activity",
                      "level": 5,
                      "activity": {
                        "id": "act-16",
                        "name": "Bureau of Internal Revenue (BIR) – Tax Identification Number (TIN), official receipts",
                        "description": "Bureau of Internal Revenue (BIR) – Tax Identification Number (TIN), official receipts",
                        "duration": "TBD",
                        "resources": "TBD",
                        "risks": "TBD",
                        "dependencies": []
                      }
                    },
                    {
                      "id": "node-26",
                      "name": "Local Government Unit (LGU) permits (Mayor’s Permit, Barangay Clearance)",
                      "type": "activity",
                      "level": 5,
                      "activity": {
                        "id": "act-17",
                        "name": "Local Government Unit (LGU) permits (Mayor’s Permit, Barangay Clearance)",
                        "description": "Local Government Unit (LGU) permits (Mayor’s Permit, Barangay Clearance)",
                        "duration": "TBD",
                        "resources": "TBD",
                        "risks": "TBD",
                        "dependencies": []
                      }
                    }
                  ]
                },
                {
                  "id": "node-27",
                  "name": "Data Privacy and Cybersecurity Compliance",
                  "type": "workpackage",
                  "level": 4,
                  "children": [
                    {
                      "id": "node-28",
                      "name": "National Privacy Commission (NPC) registration",
                      "type": "activity",
                      "level": 5,
                      "activity": {
                        "id": "act-18",
                        "name": "National Privacy Commission (NPC) registration",
                        "description": "National Privacy Commission (NPC) registration",
                        "duration": "TBD",
                        "resources": "TBD",
                        "risks": "TBD",
                        "dependencies": []
                      }
                    },
                    {
                      "id": "node-29",
                      "name": "Compliance with Data Privacy Act of 2012",
                      "type": "activity",
                      "level": 5,
                      "activity": {
                        "id": "act-19",
                        "name": "Compliance with Data Privacy Act of 2012",
                        "description": "Compliance with Data Privacy Act of 2012",
                        "duration": "TBD",
                        "resources": "TBD",
                        "risks": "TBD",
                        "dependencies": []
                      }
                    },
                    {
                      "id": "node-30",
                      "name": "Preparation of Privacy Policy, Data Sharing Agreements, Consent Forms",
                      "type": "activity",
                      "level": 5,
                      "activity": {
                        "id": "act-20",
                        "name": "Preparation of Privacy Policy, Data Sharing Agreements, Consent Forms",
                        "description": "Preparation of Privacy Policy, Data Sharing Agreements, Consent Forms",
                        "duration": "TBD",
                        "resources": "TBD",
                        "risks": "TBD",
                        "dependencies": []
                      }
                    }
                  ]
                },
                {
                  "id": "node-31",
                  "name": "Intellectual Property and Licensing",
                  "type": "workpackage",
                  "level": 4,
                  "children": [
                    {
                      "id": "node-32",
                      "name": "Intellectual Property Office of the Philippines (IPOPHL) registration for Software copyright, Trademark (brand name, logo)",
                      "type": "activity",
                      "level": 5,
                      "activity": {
                        "id": "act-21",
                        "name": "Intellectual Property Office of the Philippines (IPOPHL) registration for Software copyright, Trademark (brand name, logo)",
                        "description": "Intellectual Property Office of the Philippines (IPOPHL) registration for Software copyright, Trademark (brand name, logo)",
                        "duration": "TBD",
                        "resources": "TBD",
                        "risks": "TBD",
                        "dependencies": []
                      }
                    }
                  ]
                },
                {
                  "id": "node-33",
                  "name": "Contracts and Legal Agreements",
                  "type": "workpackage",
                  "level": 4,
                  "children": [
                    {
                      "id": "node-34",
                      "name": "Service Level Agreements (SLA) with partners",
                      "type": "activity",
                      "level": 5,
                      "activity": {
                        "id": "act-22",
                        "name": "Service Level Agreements (SLA) with partners",
                        "description": "Service Level Agreements (SLA) with partners",
                        "duration": "TBD",
                        "resources": "TBD",
                        "risks": "TBD",
                        "dependencies": []
                      }
                    },
                    {
                      "id": "node-35",
                      "name": "Memorandum of Agreement (MOA) with establishments/LGUs",
                      "type": "activity",
                      "level": 5,
                      "activity": {
                        "id": "act-23",
                        "name": "Memorandum of Agreement (MOA) with establishments/LGUs",
                        "description": "Memorandum of Agreement (MOA) with establishments/LGUs",
                        "duration": "TBD",
                        "resources": "TBD",
                        "risks": "TBD",
                        "dependencies": []
                      }
                    },
                    {
                      "id": "node-36",
                      "name": "Terms and Conditions for users",
                      "type": "activity",
                      "level": 5,
                      "activity": {
                        "id": "act-24",
                        "name": "Terms and Conditions for users",
                        "description": "Terms and Conditions for users",
                        "duration": "TBD",
                        "resources": "TBD",
                        "risks": "TBD",
                        "dependencies": []
                      }
                    },
                    {
                      "id": "node-37",
                      "name": "Vendor contracts (payment gateways, API providers)",
                      "type": "activity",
                      "level": 5,
                      "activity": {
                        "id": "act-25",
                        "name": "Vendor contracts (payment gateways, API providers)",
                        "description": "Vendor contracts (payment gateways, API providers)",
                        "duration": "TBD",
                        "resources": "TBD",
                        "risks": "TBD",
                        "dependencies": []
                      }
                    }
                  ]
                }
              ]
            },
            {
              "id": "node-38",
              "name": "Financial Feasibility",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-39",
                  "name": "Cost-Benefit analysis",
                  "type": "workpackage",
                  "level": 4,
                  "children": [
                    {
                      "id": "node-40",
                      "name": "Development costs (labor, tools, infrastructure)",
                      "type": "activity",
                      "level": 5,
                      "activity": {
                        "id": "act-26",
                        "name": "Development costs (labor, tools, infrastructure)",
                        "description": "Development costs (labor, tools, infrastructure)",
                        "duration": "TBD",
                        "resources": "TBD",
                        "risks": "TBD",
                        "dependencies": []
                      }
                    },
                    {
                      "id": "node-41",
                      "name": "Operational costs (cloud hosting, APIs, maintenance)",
                      "type": "activity",
                      "level": 5,
                      "activity": {
                        "id": "act-27",
                        "name": "Operational costs (cloud hosting, APIs, maintenance)",
                        "description": "Operational costs (cloud hosting, APIs, maintenance)",
                        "duration": "TBD",
                        "resources": "TBD",
                        "risks": "TBD",
                        "dependencies": []
                      }
                    },
                    {
                      "id": "node-42",
                      "name": "Expected benefits (subscription fees, transaction fees, partnerships)",
                      "type": "activity",
                      "level": 5,
                      "activity": {
                        "id": "act-28",
                        "name": "Expected benefits (subscription fees, transaction fees, partnerships)",
                        "description": "Expected benefits (subscription fees, transaction fees, partnerships)",
                        "duration": "TBD",
                        "resources": "TBD",
                        "risks": "TBD",
                        "dependencies": []
                      }
                    }
                  ]
                },
                {
                  "id": "node-43",
                  "name": "Payback Period",
                  "type": "workpackage",
                  "level": 4,
                  "children": [
                    {
                      "id": "node-44",
                      "name": "Estimate time to recover initial investment based on projected revenue",
                      "type": "activity",
                      "level": 5,
                      "activity": {
                        "id": "act-29",
                        "name": "Estimate time to recover initial investment based on projected revenue",
                        "description": "Estimate time to recover initial investment based on projected revenue",
                        "duration": "TBD",
                        "resources": "TBD",
                        "risks": "TBD",
                        "dependencies": []
                      }
                    }
                  ]
                },
                {
                  "id": "node-45",
                  "name": "Return on Investment (ROI)",
                  "type": "workpackage",
                  "level": 4,
                  "children": [
                    {
                      "id": "node-46",
                      "name": "Analyze profitability over a defined time horizon",
                      "type": "activity",
                      "level": 5,
                      "activity": {
                        "id": "act-30",
                        "name": "Analyze profitability over a defined time horizon",
                        "description": "Analyze profitability over a defined time horizon",
                        "duration": "TBD",
                        "resources": "TBD",
                        "risks": "TBD",
                        "dependencies": []
                      }
                    }
                  ]
                },
                {
                  "id": "node-47",
                  "name": "Budget Plan and Funding Sources",
                  "type": "workpackage",
                  "level": 4,
                  "children": [
                    {
                      "id": "node-48",
                      "name": "Identify funding (investors, grants, partnerships)",
                      "type": "activity",
                      "level": 5,
                      "activity": {
                        "id": "act-31",
                        "name": "Identify funding (investors, grants, partnerships)",
                        "description": "Identify funding (investors, grants, partnerships)",
                        "duration": "TBD",
                        "resources": "TBD",
                        "risks": "TBD",
                        "dependencies": []
                      }
                    },
                    {
                      "id": "node-49",
                      "name": "Allocate budget across phases",
                      "type": "activity",
                      "level": 5,
                      "activity": {
                        "id": "act-32",
                        "name": "Allocate budget across phases",
                        "description": "Allocate budget across phases",
                        "duration": "TBD",
                        "resources": "TBD",
                        "risks": "TBD",
                        "dependencies": []
                      }
                    }
                  ]
                }
              ]
            },
            {
              "id": "node-50",
              "name": "Technical Feasibility",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-51",
                  "name": "System Architecture and Infrastructure",
                  "type": "workpackage",
                  "level": 4,
                  "children": [
                    {
                      "id": "node-52",
                      "name": "Cloud-based backend (scalable servers, database systems)",
                      "type": "activity",
                      "level": 5,
                      "activity": {
                        "id": "act-33",
                        "name": "Cloud-based backend (scalable servers, database systems)",
                        "description": "Cloud-based backend (scalable servers, database systems)",
                        "duration": "TBD",
                        "resources": "TBD",
                        "risks": "TBD",
                        "dependencies": []
                      }
                    },
                    {
                      "id": "node-53",
                      "name": "Mobile/web application frameworks",
                      "type": "activity",
                      "level": 5,
                      "activity": {
                        "id": "act-34",
                        "name": "Mobile/web application frameworks",
                        "description": "Mobile/web application frameworks",
                        "duration": "TBD",
                        "resources": "TBD",
                        "risks": "TBD",
                        "dependencies": []
                      }
                    }
                  ]
                },
                {
                  "id": "node-54",
                  "name": "Database and Data Integration Feasibility",
                  "type": "workpackage",
                  "level": 4,
                  "children": [
                    {
                      "id": "node-55",
                      "name": "Integration of parking datasets, LGU data, and third-party sources",
                      "type": "activity",
                      "level": 5,
                      "activity": {
                        "id": "act-35",
                        "name": "Integration of parking datasets, LGU data, and third-party sources",
                        "description": "Integration of parking datasets, LGU data, and third-party sources",
                        "duration": "TBD",
                        "resources": "TBD",
                        "risks": "TBD",
                        "dependencies": []
                      }
                    },
                    {
                      "id": "node-56",
                      "name": "Data storage using PostgreSQL and MongoDB",
                      "type": "activity",
                      "level": 5,
                      "activity": {
                        "id": "act-36",
                        "name": "Data storage using PostgreSQL and MongoDB",
                        "description": "Data storage using PostgreSQL and MongoDB",
                        "duration": "TBD",
                        "resources": "TBD",
                        "risks": "TBD",
                        "dependencies": []
                      }
                    }
                  ]
                },
                {
                  "id": "node-57",
                  "name": "Technology Stack Compatibility",
                  "type": "workpackage",
                  "level": 4,
                  "children": [
                    {
                      "id": "node-58",
                      "name": "Compatibility of frontend, backend, APIs, and third-party services",
                      "type": "activity",
                      "level": 5,
                      "activity": {
                        "id": "act-37",
                        "name": "Compatibility of frontend, backend, APIs, and third-party services",
                        "description": "Compatibility of frontend, backend, APIs, and third-party services",
                        "duration": "TBD",
                        "resources": "TBD",
                        "risks": "TBD",
                        "dependencies": []
                      }
                    }
                  ]
                },
                {
                  "id": "node-59",
                  "name": "Cybersecurity and System Reliability",
                  "type": "workpackage",
                  "level": 4,
                  "children": [
                    {
                      "id": "node-60",
                      "name": "Feasibility of implementing secure authentication, encryption, and backups",
                      "type": "activity",
                      "level": 5,
                      "activity": {
                        "id": "act-38",
                        "name": "Feasibility of implementing secure authentication, encryption, and backups",
                        "description": "Feasibility of implementing secure authentication, encryption, and backups",
                        "duration": "TBD",
                        "resources": "TBD",
                        "risks": "TBD",
                        "dependencies": []
                      }
                    }
                  ]
                }
              ]
            },
            {
              "id": "node-61",
              "name": "Operational Feasibility",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-62",
                  "name": "Organizational Readiness",
                  "type": "workpackage",
                  "level": 4,
                  "children": [
                    {
                      "id": "node-63",
                      "name": "Readiness of stakeholders (drivers, admins, partners)",
                      "type": "activity",
                      "level": 5,
                      "activity": {
                        "id": "act-39",
                        "name": "Readiness of stakeholders (drivers, admins, partners)",
                        "description": "Readiness of stakeholders (drivers, admins, partners)",
                        "duration": "TBD",
                        "resources": "TBD",
                        "risks": "TBD",
                        "dependencies": []
                      }
                    },
                    {
                      "id": "node-64",
                      "name": "Adoption of digital parking systems",
                      "type": "activity",
                      "level": 5,
                      "activity": {
                        "id": "act-40",
                        "name": "Adoption of digital parking systems",
                        "description": "Adoption of digital parking systems",
                        "duration": "TBD",
                        "resources": "TBD",
                        "risks": "TBD",
                        "dependencies": []
                      }
                    }
                  ]
                },
                {
                  "id": "node-65",
                  "name": "Training and Change Management",
                  "type": "workpackage",
                  "level": 4,
                  "children": [
                    {
                      "id": "node-66",
                      "name": "Training programs for operators and administrators",
                      "type": "activity",
                      "level": 5,
                      "activity": {
                        "id": "act-41",
                        "name": "Training programs for operators and administrators",
                        "description": "Training programs for operators and administrators",
                        "duration": "TBD",
                        "resources": "TBD",
                        "risks": "TBD",
                        "dependencies": []
                      }
                    },
                    {
                      "id": "node-67",
                      "name": "User onboarding and support",
                      "type": "activity",
                      "level": 5,
                      "activity": {
                        "id": "act-42",
                        "name": "User onboarding and support",
                        "description": "User onboarding and support",
                        "duration": "TBD",
                        "resources": "TBD",
                        "risks": "TBD",
                        "dependencies": []
                      }
                    }
                  ]
                },
                {
                  "id": "node-68",
                  "name": "Cost and resource requirements",
                  "type": "workpackage",
                  "level": 4,
                  "children": [
                    {
                      "id": "node-69",
                      "name": "Integration with daily parking operations and enforcement systems",
                      "type": "activity",
                      "level": 5,
                      "activity": {
                        "id": "act-43",
                        "name": "Integration with daily parking operations and enforcement systems",
                        "description": "Integration with daily parking operations and enforcement systems",
                        "duration": "TBD",
                        "resources": "TBD",
                        "risks": "TBD",
                        "dependencies": []
                      }
                    }
                  ]
                },
                {
                  "id": "node-70",
                  "name": "Resource and Staffing Requirements",
                  "type": "workpackage",
                  "level": 4,
                  "children": [
                    {
                      "id": "node-71",
                      "name": "IT personnel, support staff, and system administrators",
                      "type": "activity",
                      "level": 5,
                      "activity": {
                        "id": "act-44",
                        "name": "IT personnel, support staff, and system administrators",
                        "description": "IT personnel, support staff, and system administrators",
                        "duration": "TBD",
                        "resources": "TBD",
                        "risks": "TBD",
                        "dependencies": []
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "node-72",
          "name": "Stakeholder Assessment",
          "type": "workpackage",
          "level": 2,
          "children": [
            {
              "id": "node-73",
              "name": "Stakeholder Register",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-74",
                  "name": "List of stakeholders (users, LGUs, partners, developers, investors)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-45",
                    "name": "List of stakeholders (users, LGUs, partners, developers, investors)",
                    "description": "List of stakeholders (users, LGUs, partners, developers, investors)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-75",
              "name": "Partner and Vendor Selection",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-76",
                  "name": "Initial list of Payment gateway providers",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-46",
                    "name": "Initial list of Payment gateway providers",
                    "description": "Initial list of Payment gateway providers",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-77",
                  "name": "Initial list of Mapping/geolocation services",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-47",
                    "name": "Initial list of Mapping/geolocation services",
                    "description": "Initial list of Mapping/geolocation services",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-78",
                  "name": "Initial list of Cloud service providers",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-48",
                    "name": "Initial list of Cloud service providers",
                    "description": "Initial list of Cloud service providers",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-79",
              "name": "Communication Plan",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-80",
                  "name": "Define communication channels, frequency, and reporting structure",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-49",
                    "name": "Define communication channels, frequency, and reporting structure",
                    "description": "Define communication channels, frequency, and reporting structure",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-81",
              "name": "Roles and Responsibilities Matrix (RACI)",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-82",
                  "name": "Assign responsibilities across project team and stakeholders",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-50",
                    "name": "Assign responsibilities across project team and stakeholders",
                    "description": "Assign responsibilities across project team and stakeholders",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "node-83",
          "name": "Project Approval",
          "type": "workpackage",
          "level": 2,
          "children": [
            {
              "id": "node-84",
              "name": "Project Charter",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-85",
                  "name": "High-level project description, objectives, stakeholders, and constraints",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-51",
                    "name": "High-level project description, objectives, stakeholders, and constraints",
                    "description": "High-level project description, objectives, stakeholders, and constraints",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-86",
              "name": "Detailed Project Proposal",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-87",
                  "name": "Scope, timeline, cost estimates, and risk analysis",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-52",
                    "name": "Scope, timeline, cost estimates, and risk analysis",
                    "description": "Scope, timeline, cost estimates, and risk analysis",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-88",
              "name": "Risk Assessment Summary",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-89",
                  "name": "Initial identification of major project risks and mitigation strategies",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-53",
                    "name": "Initial identification of major project risks and mitigation strategies",
                    "description": "Initial identification of major project risks and mitigation strategies",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-90",
              "name": "Approval and Sign-Off Documents",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-91",
                  "name": "Stakeholder approval forms",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-54",
                    "name": "Stakeholder approval forms",
                    "description": "Stakeholder approval forms",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-92",
                  "name": "Executive sign-off",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-55",
                    "name": "Executive sign-off",
                    "description": "Executive sign-off",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-93",
                  "name": "Go/no-go decision documentation",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-56",
                    "name": "Go/no-go decision documentation",
                    "description": "Go/no-go decision documentation",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "node-94",
      "name": "PHASE 2: EXECUTION",
      "type": "phase",
      "level": 1,
      "children": [
        {
          "id": "node-95",
          "name": "Project Planning",
          "type": "workpackage",
          "level": 2,
          "children": [
            {
              "id": "node-96",
              "name": "Project Management Plan",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-97",
                  "name": "Consolidated plan covering scope, schedule, cost, quality, and risk",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-57",
                    "name": "Consolidated plan covering scope, schedule, cost, quality, and risk",
                    "description": "Consolidated plan covering scope, schedule, cost, quality, and risk",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-98",
                  "name": "Defines project governance structure and reporting hierarchy",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-58",
                    "name": "Defines project governance structure and reporting hierarchy",
                    "description": "Defines project governance structure and reporting hierarchy",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-99",
              "name": "Project Schedule and Timeline",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-100",
                  "name": "Development of Gantt chart with milestones and dependencies",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-59",
                    "name": "Development of Gantt chart with milestones and dependencies",
                    "description": "Development of Gantt chart with milestones and dependencies",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-101",
                  "name": "Sprint planning (if Agile methodology is applied)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-60",
                    "name": "Sprint planning (if Agile methodology is applied)",
                    "description": "Sprint planning (if Agile methodology is applied)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-102",
              "name": "Budget and Cost Management Plan",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-103",
                  "name": "Allocation of financial resources per phase",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-61",
                    "name": "Allocation of financial resources per phase",
                    "description": "Allocation of financial resources per phase",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-104",
                  "name": "Cost tracking and control procedures",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-62",
                    "name": "Cost tracking and control procedures",
                    "description": "Cost tracking and control procedures",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-105",
              "name": "Resource Allocation Plan",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-106",
                  "name": "Assignment of roles (developers, QA, project manager, UI/UX, DevOps)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-63",
                    "name": "Assignment of roles (developers, QA, project manager, UI/UX, DevOps)",
                    "description": "Assignment of roles (developers, QA, project manager, UI/UX, DevOps)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-107",
                  "name": "Hardware, software, and infrastructure requirements",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-64",
                    "name": "Hardware, software, and infrastructure requirements",
                    "description": "Hardware, software, and infrastructure requirements",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-108",
              "name": "Requirements Specification (SRS)",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-109",
                  "name": "Functional requirements (booking, payment, tracking)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-65",
                    "name": "Functional requirements (booking, payment, tracking)",
                    "description": "Functional requirements (booking, payment, tracking)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-110",
                  "name": "Non-functional requirements (performance, security, scalability)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-66",
                    "name": "Non-functional requirements (performance, security, scalability)",
                    "description": "Non-functional requirements (performance, security, scalability)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-111",
                  "name": "Use cases and user stories",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-67",
                    "name": "Use cases and user stories",
                    "description": "Use cases and user stories",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "node-112",
          "name": "System Planning",
          "type": "workpackage",
          "level": 2,
          "children": [
            {
              "id": "node-113",
              "name": "System Architecture Design",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-114",
                  "name": "Definition of system architecture (e.g., client-server, microservices)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-68",
                    "name": "Definition of system architecture (e.g., client-server, microservices)",
                    "description": "Definition of system architecture (e.g., client-server, microservices)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-115",
                  "name": "Identification of core components (frontend, backend, APIs, database)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-69",
                    "name": "Identification of core components (frontend, backend, APIs, database)",
                    "description": "Identification of core components (frontend, backend, APIs, database)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-116",
              "name": "Application Design (UI/UX)",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-117",
                  "name": "Wireframes and prototypes",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-70",
                    "name": "Wireframes and prototypes",
                    "description": "Wireframes and prototypes",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-118",
                  "name": "User journey mapping and interaction flows",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-71",
                    "name": "User journey mapping and interaction flows",
                    "description": "User journey mapping and interaction flows",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-119",
              "name": "Database Design",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-120",
                  "name": "Logical and physical database schema design",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-72",
                    "name": "Logical and physical database schema design",
                    "description": "Logical and physical database schema design",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-121",
                  "name": "Definition of entities (Users, Parking slots, reservations, transactions, logs)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-73",
                    "name": "Definition of entities (Users, Parking slots, reservations, transactions, logs)",
                    "description": "Definition of entities (Users, Parking slots, reservations, transactions, logs)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-122",
              "name": "API Design and Specifications",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-123",
                  "name": "Definition of endpoints (authentication, booking, payments, analytics)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-74",
                    "name": "Definition of endpoints (authentication, booking, payments, analytics)",
                    "description": "Definition of endpoints (authentication, booking, payments, analytics)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-124",
                  "name": "API documentation (request/response formats, error handling)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-75",
                    "name": "API documentation (request/response formats, error handling)",
                    "description": "API documentation (request/response formats, error handling)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-125",
              "name": "Integration Architecture",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-126",
                  "name": "Design of integration with Payment gateways",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-76",
                    "name": "Design of integration with Payment gateways",
                    "description": "Design of integration with Payment gateways",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-127",
                  "name": "Design of integration with Mapping and geolocation services",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-77",
                    "name": "Design of integration with Mapping and geolocation services",
                    "description": "Design of integration with Mapping and geolocation services",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-128",
                  "name": "Design of integration with Parking sensors or third-party data providers",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-78",
                    "name": "Design of integration with Parking sensors or third-party data providers",
                    "description": "Design of integration with Parking sensors or third-party data providers",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "node-129",
          "name": "Data Preparation and Management",
          "type": "workpackage",
          "level": 2,
          "children": [
            {
              "id": "node-130",
              "name": "Data Collection and Acquisition",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-131",
                  "name": "Gather parking location datasets from LGUs and private establishments",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-79",
                    "name": "Gather parking location datasets from LGUs and private establishments",
                    "description": "Gather parking location datasets from LGUs and private establishments",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-132",
                  "name": "Collect legal parking, tow-away, and no-parking zone records",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-80",
                    "name": "Collect legal parking, tow-away, and no-parking zone records",
                    "description": "Collect legal parking, tow-away, and no-parking zone records",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-133",
              "name": "Data Cleaning and Validation",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-134",
                  "name": "Remove duplicates and inconsistent records",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-81",
                    "name": "Remove duplicates and inconsistent records",
                    "description": "Remove duplicates and inconsistent records",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-135",
                  "name": "Standardize formats (coordinates, naming conventions)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-82",
                    "name": "Standardize formats (coordinates, naming conventions)",
                    "description": "Standardize formats (coordinates, naming conventions)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-136",
              "name": "Data Structuring and Transformation",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-137",
                  "name": "Convert datasets into system-compatible formats",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-83",
                    "name": "Convert datasets into system-compatible formats",
                    "description": "Convert datasets into system-compatible formats",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-138",
                  "name": "Prepare geospatial data for mapping integration",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-84",
                    "name": "Prepare geospatial data for mapping integration",
                    "description": "Prepare geospatial data for mapping integration",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-139",
              "name": "Data Governance and Ownership",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-140",
                  "name": "Define data ownership and access control",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-85",
                    "name": "Define data ownership and access control",
                    "description": "Define data ownership and access control",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-141",
                  "name": "Establish data usage policies and compliance guidelines",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-86",
                    "name": "Establish data usage policies and compliance guidelines",
                    "description": "Establish data usage policies and compliance guidelines",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "node-142",
          "name": "Risk Management and Compliance",
          "type": "workpackage",
          "level": 2,
          "children": [
            {
              "id": "node-143",
              "name": "Risk Management Plan",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-144",
                  "name": "Technical risks (system failure, integration issues)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-87",
                    "name": "Technical risks (system failure, integration issues)",
                    "description": "Technical risks (system failure, integration issues)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-145",
                  "name": "Operational risks (low adoption, process disruption)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-88",
                    "name": "Operational risks (low adoption, process disruption)",
                    "description": "Operational risks (low adoption, process disruption)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-146",
                  "name": "External risks (regulatory changes, data availability)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-89",
                    "name": "External risks (regulatory changes, data availability)",
                    "description": "External risks (regulatory changes, data availability)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-147",
                  "name": "Risk mitigation and contingency strategies",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-90",
                    "name": "Risk mitigation and contingency strategies",
                    "description": "Risk mitigation and contingency strategies",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-148",
              "name": "Information Security Plan",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-149",
                  "name": "Definition of security policies and standards",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-91",
                    "name": "Definition of security policies and standards",
                    "description": "Definition of security policies and standards",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-150",
                  "name": "Implementation approach for Authentication and authorization",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-92",
                    "name": "Implementation approach for Authentication and authorization",
                    "description": "Implementation approach for Authentication and authorization",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-151",
                  "name": "Implementation approach for Data encryption",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-93",
                    "name": "Implementation approach for Data encryption",
                    "description": "Implementation approach for Data encryption",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-152",
                  "name": "Implementation approach for Secure APIs",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-94",
                    "name": "Implementation approach for Secure APIs",
                    "description": "Implementation approach for Secure APIs",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-153",
              "name": "Data Privacy Compliance Plan",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-154",
                  "name": "Alignment with Data Privacy Act of 2012",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-95",
                    "name": "Alignment with Data Privacy Act of 2012",
                    "description": "Alignment with Data Privacy Act of 2012",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-155",
                  "name": "Preparation of Privacy Impact Assessment (PIA)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-96",
                    "name": "Preparation of Privacy Impact Assessment (PIA)",
                    "description": "Preparation of Privacy Impact Assessment (PIA)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-156",
                  "name": "Preparation of Data Protection Policies",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-97",
                    "name": "Preparation of Data Protection Policies",
                    "description": "Preparation of Data Protection Policies",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-157",
                  "name": "Preparation of Breach response procedures",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-98",
                    "name": "Preparation of Breach response procedures",
                    "description": "Preparation of Breach response procedures",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-158",
              "name": "Disaster Recovery and Business Continuity Plan",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-159",
                  "name": "Backup strategies (automated backups, redundancy systems)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-99",
                    "name": "Backup strategies (automated backups, redundancy systems)",
                    "description": "Backup strategies (automated backups, redundancy systems)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-160",
                  "name": "Recovery procedures in case of system failure",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-100",
                    "name": "Recovery procedures in case of system failure",
                    "description": "Recovery procedures in case of system failure",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-161",
              "name": "Compliance Checklist and Documentation",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-162",
                  "name": "Verification of all legal, regulatory, and technical requirements",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-101",
                    "name": "Verification of all legal, regulatory, and technical requirements",
                    "description": "Verification of all legal, regulatory, and technical requirements",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-163",
                  "name": "Documentation for audit and approval readiness",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-102",
                    "name": "Documentation for audit and approval readiness",
                    "description": "Documentation for audit and approval readiness",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "node-164",
          "name": "Procurement and Vendor Management",
          "type": "workpackage",
          "level": 2,
          "children": [
            {
              "id": "node-165",
              "name": "Vendor Selection",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-166",
                  "name": "Payment gateway providers",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-103",
                    "name": "Payment gateway providers",
                    "description": "Payment gateway providers",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-167",
                  "name": "Cloud infrastructure providers",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-104",
                    "name": "Cloud infrastructure providers",
                    "description": "Cloud infrastructure providers",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-168",
                  "name": "SMS/email notification services",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-105",
                    "name": "SMS/email notification services",
                    "description": "SMS/email notification services",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-169",
              "name": "Contract Negotiation and Agreements",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-170",
                  "name": "Service Level Agreements (SLA)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-106",
                    "name": "Service Level Agreements (SLA)",
                    "description": "Service Level Agreements (SLA)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-171",
                  "name": "Data processing and sharing agreements",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-107",
                    "name": "Data processing and sharing agreements",
                    "description": "Data processing and sharing agreements",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-172",
              "name": "Procurement of Tools and Infrastructure",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-173",
                  "name": "Cloud hosting services",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-108",
                    "name": "Cloud hosting services",
                    "description": "Cloud hosting services",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-174",
                  "name": "Development tools and licenses",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-109",
                    "name": "Development tools and licenses",
                    "description": "Development tools and licenses",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-175",
                  "name": "Security and monitoring tools",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-110",
                    "name": "Security and monitoring tools",
                    "description": "Security and monitoring tools",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-176",
                  "name": "Hardwares",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-111",
                    "name": "Hardwares",
                    "description": "Hardwares",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "node-177",
          "name": "Quality Management Plan",
          "type": "workpackage",
          "level": 2,
          "children": [
            {
              "id": "node-178",
              "name": "Quality Assurance Plan",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-179",
                  "name": "Define quality standards and acceptance criteria",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-112",
                    "name": "Define quality standards and acceptance criteria",
                    "description": "Define quality standards and acceptance criteria",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-180",
                  "name": "Establish testing strategies and checkpoints",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-113",
                    "name": "Establish testing strategies and checkpoints",
                    "description": "Establish testing strategies and checkpoints",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-181",
              "name": "Quality Control Procedures",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-182",
                  "name": "Code reviews and technical audits",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-114",
                    "name": "Code reviews and technical audits",
                    "description": "Code reviews and technical audits",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-183",
                  "name": "Continuous integration and testing processes",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-115",
                    "name": "Continuous integration and testing processes",
                    "description": "Continuous integration and testing processes",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-184",
              "name": "Documentation Standards",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-185",
                  "name": "Standard format for technical, API, and user documentation",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-116",
                    "name": "Standard format for technical, API, and user documentation",
                    "description": "Standard format for technical, API, and user documentation",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "node-186",
          "name": "Communication and Reporting",
          "type": "workpackage",
          "level": 2,
          "children": [
            {
              "id": "node-187",
              "name": "Communication Plan Execution",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-188",
                  "name": "Regular status meetings and updates",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-117",
                    "name": "Regular status meetings and updates",
                    "description": "Regular status meetings and updates",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-189",
                  "name": "Stakeholder reporting schedule",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-118",
                    "name": "Stakeholder reporting schedule",
                    "description": "Stakeholder reporting schedule",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-190",
              "name": "Progress Monitoring and Reporting",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-191",
                  "name": "Track milestones, deliverables, and KPIs",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-119",
                    "name": "Track milestones, deliverables, and KPIs",
                    "description": "Track milestones, deliverables, and KPIs",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-192",
                  "name": "Prepare progress reports and dashboards",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-120",
                    "name": "Prepare progress reports and dashboards",
                    "description": "Prepare progress reports and dashboards",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-193",
              "name": "Issue and Change Management",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-194",
                  "name": "Log and track issues, bugs, and risks",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-121",
                    "name": "Log and track issues, bugs, and risks",
                    "description": "Log and track issues, bugs, and risks",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-195",
                  "name": "Implement change request and approval process",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-122",
                    "name": "Implement change request and approval process",
                    "description": "Implement change request and approval process",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "node-196",
      "name": "PHASE 3: DEVELOPMENT",
      "type": "phase",
      "level": 1,
      "children": [
        {
          "id": "node-197",
          "name": "Front-End Development",
          "type": "workpackage",
          "level": 2,
          "children": [
            {
              "id": "node-198",
              "name": "Customer Application Development",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-199",
                  "name": "User interface Development",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-123",
                    "name": "User interface Development",
                    "description": "User interface Development",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-200",
                  "name": "Build search and mapping screens",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-124",
                    "name": "Build search and mapping screens",
                    "description": "Build search and mapping screens",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-201",
                  "name": "Build parking slot availability display",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-125",
                    "name": "Build parking slot availability display",
                    "description": "Build parking slot availability display",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-202",
                  "name": "Build reservation and booking interface",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-126",
                    "name": "Build reservation and booking interface",
                    "description": "Build reservation and booking interface",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-203",
                  "name": "Build payment interface",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-127",
                    "name": "Build payment interface",
                    "description": "Build payment interface",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-204",
                  "name": "Build profile and account management pages",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-128",
                    "name": "Build profile and account management pages",
                    "description": "Build profile and account management pages",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-205",
                  "name": "Build notifications and alerts interface",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-129",
                    "name": "Build notifications and alerts interface",
                    "description": "Build notifications and alerts interface",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-206",
                  "name": "Build navigation and route guidance interface",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-130",
                    "name": "Build navigation and route guidance interface",
                    "description": "Build navigation and route guidance interface",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-207",
              "name": "Enterprise Dashboard Development",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-208",
                  "name": "Develop dashboard interface",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-131",
                    "name": "Develop dashboard interface",
                    "description": "Develop dashboard interface",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-209",
                  "name": "Build parking slot monitoring panel",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-132",
                    "name": "Build parking slot monitoring panel",
                    "description": "Build parking slot monitoring panel",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-210",
                  "name": "Build reservation management module",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-133",
                    "name": "Build reservation management module",
                    "description": "Build reservation management module",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-211",
                  "name": "Build payment and transaction monitoring page",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-134",
                    "name": "Build payment and transaction monitoring page",
                    "description": "Build payment and transaction monitoring page",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-212",
                  "name": "Build reports and analytics dashboard view",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-135",
                    "name": "Build reports and analytics dashboard view",
                    "description": "Build reports and analytics dashboard view",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-213",
                  "name": "Build user and role management interface",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-136",
                    "name": "Build user and role management interface",
                    "description": "Build user and role management interface",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-214",
                  "name": "Build incident and issue reporting interface",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-137",
                    "name": "Build incident and issue reporting interface",
                    "description": "Build incident and issue reporting interface",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-215",
                  "name": "Build admin settings and configuration panel",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-138",
                    "name": "Build admin settings and configuration panel",
                    "description": "Build admin settings and configuration panel",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "node-216",
          "name": "Back-end Development",
          "type": "workpackage",
          "level": 2,
          "children": [
            {
              "id": "node-217",
              "name": "Customer User Registration",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-218",
                  "name": "Develop user registration module",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-139",
                    "name": "Develop user registration module",
                    "description": "Develop user registration module",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-219",
                  "name": "Develop login and authentication module",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-140",
                    "name": "Develop login and authentication module",
                    "description": "Develop login and authentication module",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-220",
                  "name": "Develop password recovery and reset functionality",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-141",
                    "name": "Develop password recovery and reset functionality",
                    "description": "Develop password recovery and reset functionality",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-221",
                  "name": "Develop profile creation and update functionality",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-142",
                    "name": "Develop profile creation and update functionality",
                    "description": "Develop profile creation and update functionality",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-222",
                  "name": "Develop user verification features",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-143",
                    "name": "Develop user verification features",
                    "description": "Develop user verification features",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-223",
                  "name": "Develop session and account management",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-144",
                    "name": "Develop session and account management",
                    "description": "Develop session and account management",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-224",
              "name": "API Integrations",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-225",
                  "name": "Develop internal system APIs",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-145",
                    "name": "Develop internal system APIs",
                    "description": "Develop internal system APIs",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-226",
                  "name": "Integrate map and geolocation services",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-146",
                    "name": "Integrate map and geolocation services",
                    "description": "Integrate map and geolocation services",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-227",
                  "name": "Integrate payment gateway services",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-147",
                    "name": "Integrate payment gateway services",
                    "description": "Integrate payment gateway services",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-228",
                  "name": "Integrate SMS, email, or push notification services",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-148",
                    "name": "Integrate SMS, email, or push notification services",
                    "description": "Integrate SMS, email, or push notification services",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-229",
                  "name": "Integrate parking sensor or third-party availability data",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-149",
                    "name": "Integrate parking sensor or third-party availability data",
                    "description": "Integrate parking sensor or third-party availability data",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-230",
                  "name": "Integrate enterprise dashboard with backend services",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-150",
                    "name": "Integrate enterprise dashboard with backend services",
                    "description": "Integrate enterprise dashboard with backend services",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-231",
              "name": "Core Business Logic Development",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-232",
                  "name": "Develop parking slot reservation logic",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-151",
                    "name": "Develop parking slot reservation logic",
                    "description": "Develop parking slot reservation logic",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-233",
                  "name": "Develop slot allocation and release process",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-152",
                    "name": "Develop slot allocation and release process",
                    "description": "Develop slot allocation and release process",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-234",
                  "name": "Develop booking confirmation and cancellation process",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-153",
                    "name": "Develop booking confirmation and cancellation process",
                    "description": "Develop booking confirmation and cancellation process",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-235",
                  "name": "Develop payment processing workflow",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-154",
                    "name": "Develop payment processing workflow",
                    "description": "Develop payment processing workflow",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-236",
                  "name": "Develop penalty, violation, or no-parking rule",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-155",
                    "name": "Develop penalty, violation, or no-parking rule",
                    "description": "Develop penalty, violation, or no-parking rule",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-237",
                  "name": "Develop real-time parking status update logic",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-156",
                    "name": "Develop real-time parking status update logic",
                    "description": "Develop real-time parking status update logic",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-238",
              "name": "Database Management and Integrations",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-239",
                  "name": "Design database schema using POSTGRESQL and MONGODB",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-157",
                    "name": "Design database schema using POSTGRESQL and MONGODB",
                    "description": "Design database schema using POSTGRESQL and MONGODB",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-240",
                  "name": "Create user database",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-158",
                    "name": "Create user database",
                    "description": "Create user database",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-241",
                  "name": "Create logs and activity tracking database",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-159",
                    "name": "Create logs and activity tracking database",
                    "description": "Create logs and activity tracking database",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-242",
                  "name": "Create parking slot and location database",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-160",
                    "name": "Create parking slot and location database",
                    "description": "Create parking slot and location database",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-243",
                  "name": "Create reservations and transactions database",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-161",
                    "name": "Create reservations and transactions database",
                    "description": "Create reservations and transactions database",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-244",
                  "name": "Create enterprise and admin records database",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-162",
                    "name": "Create enterprise and admin records database",
                    "description": "Create enterprise and admin records database",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-245",
              "name": "Security",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-246",
                  "name": "Implement authentication and authorization controls",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-163",
                    "name": "Implement authentication and authorization controls",
                    "description": "Implement authentication and authorization controls",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-247",
                  "name": "Implement role-based access control",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-164",
                    "name": "Implement role-based access control",
                    "description": "Implement role-based access control",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-248",
                  "name": "Implement password hashing and encryption",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-165",
                    "name": "Implement password hashing and encryption",
                    "description": "Implement password hashing and encryption",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-249",
                  "name": "Implement secure session handling",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-166",
                    "name": "Implement secure session handling",
                    "description": "Implement secure session handling",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-250",
                  "name": "Implement input validation and protection",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-167",
                    "name": "Implement input validation and protection",
                    "description": "Implement input validation and protection",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-251",
                  "name": "Implement audit logs and access monitoring",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-168",
                    "name": "Implement audit logs and access monitoring",
                    "description": "Implement audit logs and access monitoring",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-252",
                  "name": "Implement privacy and data protection controls",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-169",
                    "name": "Implement privacy and data protection controls",
                    "description": "Implement privacy and data protection controls",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-253",
                  "name": "Implement database security controls",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-170",
                    "name": "Implement database security controls",
                    "description": "Implement database security controls",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-254",
                  "name": "Implement backup and recovery mechanisms",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-171",
                    "name": "Implement backup and recovery mechanisms",
                    "description": "Implement backup and recovery mechanisms",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-255",
                  "name": "Implement version control",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-172",
                    "name": "Implement version control",
                    "description": "Implement version control",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-256",
                  "name": "Establish CI/CD Pipeline",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-173",
                    "name": "Establish CI/CD Pipeline",
                    "description": "Establish CI/CD Pipeline",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-257",
              "name": "Data Integration",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-258",
                  "name": "Integrate parking location datasets",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-174",
                    "name": "Integrate parking location datasets",
                    "description": "Integrate parking location datasets",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-259",
                  "name": "Integrate legal parking, tow-away, and no-parking zone records",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-175",
                    "name": "Integrate legal parking, tow-away, and no-parking zone records",
                    "description": "Integrate legal parking, tow-away, and no-parking zone records",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-260",
                  "name": "Integrate establishment and facility records",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-176",
                    "name": "Integrate establishment and facility records",
                    "description": "Integrate establishment and facility records",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-261",
                  "name": "Integrate real-time slot availability data",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-177",
                    "name": "Integrate real-time slot availability data",
                    "description": "Integrate real-time slot availability data",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-262",
                  "name": "Integrate transaction and payment records",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-178",
                    "name": "Integrate transaction and payment records",
                    "description": "Integrate transaction and payment records",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "node-263",
          "name": "Analytics",
          "type": "workpackage",
          "level": 2,
          "children": [
            {
              "id": "node-264",
              "name": "Operational Analytics",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-265",
                  "name": "Develop parking occupancy monitoring",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-179",
                    "name": "Develop parking occupancy monitoring",
                    "description": "Develop parking occupancy monitoring",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-266",
                  "name": "Develop reservation tracking and utilization reports",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-180",
                    "name": "Develop reservation tracking and utilization reports",
                    "description": "Develop reservation tracking and utilization reports",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-267",
                  "name": "Develop transaction and payment summaries",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-181",
                    "name": "Develop transaction and payment summaries",
                    "description": "Develop transaction and payment summaries",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-268",
                  "name": "Develop peak usage and demand analysis",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-182",
                    "name": "Develop peak usage and demand analysis",
                    "description": "Develop peak usage and demand analysis",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-269",
                  "name": "Develop user activity and booking behavior reports",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-183",
                    "name": "Develop user activity and booking behavior reports",
                    "description": "Develop user activity and booking behavior reports",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-270",
              "name": "Decision Support Analytics",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-271",
                  "name": "Develop congestion and parking demand insights",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-184",
                    "name": "Develop congestion and parking demand insights",
                    "description": "Develop congestion and parking demand insights",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-272",
                  "name": "Develop reports for partner establishments",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-185",
                    "name": "Develop reports for partner establishments",
                    "description": "Develop reports for partner establishments",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-273",
                  "name": "Develop reports for administrators and operators",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-186",
                    "name": "Develop reports for administrators and operators",
                    "description": "Develop reports for administrators and operators",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-274",
                  "name": "Develop usage trends and forecasting features",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-187",
                    "name": "Develop usage trends and forecasting features",
                    "description": "Develop usage trends and forecasting features",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-275",
                  "name": "Develop data visualizations for planning and management",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-188",
                    "name": "Develop data visualizations for planning and management",
                    "description": "Develop data visualizations for planning and management",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-276",
              "name": "AI and Intelligent Features",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-277",
                  "name": "Develop parking recommendation logic",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-189",
                    "name": "Develop parking recommendation logic",
                    "description": "Develop parking recommendation logic",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-278",
                  "name": "Develop predictive parking availability features",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-190",
                    "name": "Develop predictive parking availability features",
                    "description": "Develop predictive parking availability features",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-279",
                  "name": "Develop anomaly or unusual activity detection",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-191",
                    "name": "Develop anomaly or unusual activity detection",
                    "description": "Develop anomaly or unusual activity detection",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-280",
                  "name": "Develop smart insights for operational improvement",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-192",
                    "name": "Develop smart insights for operational improvement",
                    "description": "Develop smart insights for operational improvement",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "node-281",
          "name": "Development Documentation",
          "type": "workpackage",
          "level": 2,
          "children": [
            {
              "id": "node-282",
              "name": "Prepare technical documentation",
              "type": "activity",
              "level": 3,
              "activity": {
                "id": "act-193",
                "name": "Prepare technical documentation",
                "description": "Prepare technical documentation",
                "duration": "TBD",
                "resources": "TBD",
                "risks": "TBD",
                "dependencies": []
              }
            },
            {
              "id": "node-283",
              "name": "Prepare API documentation",
              "type": "activity",
              "level": 3,
              "activity": {
                "id": "act-194",
                "name": "Prepare API documentation",
                "description": "Prepare API documentation",
                "duration": "TBD",
                "resources": "TBD",
                "risks": "TBD",
                "dependencies": []
              }
            },
            {
              "id": "node-284",
              "name": "Prepare database documentation",
              "type": "activity",
              "level": 3,
              "activity": {
                "id": "act-195",
                "name": "Prepare database documentation",
                "description": "Prepare database documentation",
                "duration": "TBD",
                "resources": "TBD",
                "risks": "TBD",
                "dependencies": []
              }
            },
            {
              "id": "node-285",
              "name": "Prepare module documentation",
              "type": "activity",
              "level": 3,
              "activity": {
                "id": "act-196",
                "name": "Prepare module documentation",
                "description": "Prepare module documentation",
                "duration": "TBD",
                "resources": "TBD",
                "risks": "TBD",
                "dependencies": []
              }
            },
            {
              "id": "node-286",
              "name": "Document source code and versioning",
              "type": "activity",
              "level": 3,
              "activity": {
                "id": "act-197",
                "name": "Document source code and versioning",
                "description": "Document source code and versioning",
                "duration": "TBD",
                "resources": "TBD",
                "risks": "TBD",
                "dependencies": []
              }
            },
            {
              "id": "node-287",
              "name": "Document configuration and deployment prerequisites",
              "type": "activity",
              "level": 3,
              "activity": {
                "id": "act-198",
                "name": "Document configuration and deployment prerequisites",
                "description": "Document configuration and deployment prerequisites",
                "duration": "TBD",
                "resources": "TBD",
                "risks": "TBD",
                "dependencies": []
              }
            }
          ]
        }
      ]
    },
    {
      "id": "node-288",
      "name": "PHASE 4: TESTING",
      "type": "phase",
      "level": 1,
      "children": [
        {
          "id": "node-289",
          "name": "Unit Testing",
          "type": "workpackage",
          "level": 2,
          "children": [
            {
              "id": "node-290",
              "name": "Front-End Components",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-291",
                  "name": "Test UI components (buttons, forms, maps, modals) for correct rendering",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-199",
                    "name": "Test UI components (buttons, forms, maps, modals) for correct rendering",
                    "description": "Test UI components (buttons, forms, maps, modals) for correct rendering",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-292",
                  "name": "Validate input fields (e.g., booking forms, login forms)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-200",
                    "name": "Validate input fields (e.g., booking forms, login forms)",
                    "description": "Validate input fields (e.g., booking forms, login forms)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-293",
                  "name": "Test responsiveness across devices and screen sizes",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-201",
                    "name": "Test responsiveness across devices and screen sizes",
                    "description": "Test responsiveness across devices and screen sizes",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-294",
              "name": "Back-End Modules",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-295",
                  "name": "Test user authentication functions (login, registration, token handling)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-202",
                    "name": "Test user authentication functions (login, registration, token handling)",
                    "description": "Test user authentication functions (login, registration, token handling)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-296",
                  "name": "Test reservation logic (slot assignment, availability updates)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-203",
                    "name": "Test reservation logic (slot assignment, availability updates)",
                    "description": "Test reservation logic (slot assignment, availability updates)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-297",
                  "name": "Test payment processing functions (amount calculation, transaction validation)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-204",
                    "name": "Test payment processing functions (amount calculation, transaction validation)",
                    "description": "Test payment processing functions (amount calculation, transaction validation)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-298",
                  "name": "Test notification triggers (SMS/email/push logic)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-205",
                    "name": "Test notification triggers (SMS/email/push logic)",
                    "description": "Test notification triggers (SMS/email/push logic)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-299",
              "name": "Database Operations",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-300",
                  "name": "Test CRUD operations for Users, Parking slots, Reservations, Transactions",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-206",
                    "name": "Test CRUD operations for Users, Parking slots, Reservations, Transactions",
                    "description": "Test CRUD operations for Users, Parking slots, Reservations, Transactions",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-301",
                  "name": "Validate data consistency and constraints (e.g., no double booking of slots)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-207",
                    "name": "Validate data consistency and constraints (e.g., no double booking of slots)",
                    "description": "Validate data consistency and constraints (e.g., no double booking of slots)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "node-302",
          "name": "Integration Testing",
          "type": "workpackage",
          "level": 2,
          "children": [
            {
              "id": "node-303",
              "name": "Frontend–Backend Integration",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-304",
                  "name": "Validate API calls from mobile/web app to backend",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-208",
                    "name": "Validate API calls from mobile/web app to backend",
                    "description": "Validate API calls from mobile/web app to backend",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-305",
                  "name": "Test real-time updates (parking availability sync)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-209",
                    "name": "Test real-time updates (parking availability sync)",
                    "description": "Test real-time updates (parking availability sync)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-306",
                  "name": "Ensure correct data flow between UI and server",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-210",
                    "name": "Ensure correct data flow between UI and server",
                    "description": "Ensure correct data flow between UI and server",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-307",
              "name": "API and Third-Party Integrations",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-308",
                  "name": "Test map and geolocation services (accurate pin/location rendering)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-211",
                    "name": "Test map and geolocation services (accurate pin/location rendering)",
                    "description": "Test map and geolocation services (accurate pin/location rendering)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-309",
                  "name": "Test payment gateway integration (successful/failed transactions)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-212",
                    "name": "Test payment gateway integration (successful/failed transactions)",
                    "description": "Test payment gateway integration (successful/failed transactions)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-310",
                  "name": "Test notification services (SMS, email, push delivery)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-213",
                    "name": "Test notification services (SMS, email, push delivery)",
                    "description": "Test notification services (SMS, email, push delivery)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-311",
                  "name": "Test parking sensor or third-party availability data feeds",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-214",
                    "name": "Test parking sensor or third-party availability data feeds",
                    "description": "Test parking sensor or third-party availability data feeds",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-312",
              "name": "System Module Integration",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-313",
                  "name": "Validate connection between Reservation system and payment system",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-215",
                    "name": "Validate connection between Reservation system and payment system",
                    "description": "Validate connection between Reservation system and payment system",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-314",
                  "name": "Validate connection between Dashboard and backend database",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-216",
                    "name": "Validate connection between Dashboard and backend database",
                    "description": "Validate connection between Dashboard and backend database",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-315",
                  "name": "Validate connection between Analytics and transaction logs",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-217",
                    "name": "Validate connection between Analytics and transaction logs",
                    "description": "Validate connection between Analytics and transaction logs",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "node-316",
          "name": "End-to-End Testing (E2E)",
          "type": "workpackage",
          "level": 2,
          "children": [
            {
              "id": "node-317",
              "name": "Customer User Flow",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-318",
                  "name": "Search for parking, View availability, Reserve slot, Pay, Receive confirmation",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-218",
                    "name": "Search for parking, View availability, Reserve slot, Pay, Receive confirmation",
                    "description": "Search for parking, View availability, Reserve slot, Pay, Receive confirmation",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-319",
                  "name": "Navigate to location using route guidance",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-219",
                    "name": "Navigate to location using route guidance",
                    "description": "Navigate to location using route guidance",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-320",
                  "name": "Cancel booking and verify refund or release logic",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-220",
                    "name": "Cancel booking and verify refund or release logic",
                    "description": "Cancel booking and verify refund or release logic",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-321",
              "name": "Account Management Flow",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-322",
                  "name": "Register, Verify account, Login, Update profile, Logout",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-221",
                    "name": "Register, Verify account, Login, Update profile, Logout",
                    "description": "Register, Verify account, Login, Update profile, Logout",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-323",
                  "name": "Test password recovery and session expiration",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-222",
                    "name": "Test password recovery and session expiration",
                    "description": "Test password recovery and session expiration",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-324",
              "name": "Enterprise/Admin Flow",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-325",
                  "name": "Monitor parking slots in dashboard",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-223",
                    "name": "Monitor parking slots in dashboard",
                    "description": "Monitor parking slots in dashboard",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-326",
                  "name": "Approve/manage reservations",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-224",
                    "name": "Approve/manage reservations",
                    "description": "Approve/manage reservations",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-327",
                  "name": "View transactions and analytics reports",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-225",
                    "name": "View transactions and analytics reports",
                    "description": "View transactions and analytics reports",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-328",
                  "name": "Handle incident reports and user issues",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-226",
                    "name": "Handle incident reports and user issues",
                    "description": "Handle incident reports and user issues",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "node-329",
          "name": "Performance Testing",
          "type": "workpackage",
          "level": 2,
          "children": [
            {
              "id": "node-330",
              "name": "Load Testing",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-331",
                  "name": "Simulate multiple concurrent users booking parking slots",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-227",
                    "name": "Simulate multiple concurrent users booking parking slots",
                    "description": "Simulate multiple concurrent users booking parking slots",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-332",
                  "name": "Test system during peak hours (e.g., rush hour scenarios)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-228",
                    "name": "Test system during peak hours (e.g., rush hour scenarios)",
                    "description": "Test system during peak hours (e.g., rush hour scenarios)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-333",
              "name": "Stress Testing",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-334",
                  "name": "Push system beyond normal capacity to identify breaking points",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-229",
                    "name": "Push system beyond normal capacity to identify breaking points",
                    "description": "Push system beyond normal capacity to identify breaking points",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-335",
                  "name": "Evaluate system recovery after overload",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-230",
                    "name": "Evaluate system recovery after overload",
                    "description": "Evaluate system recovery after overload",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-336",
              "name": "Response Time Testing",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-337",
                  "name": "Measure API response times (search, booking, payment)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-231",
                    "name": "Measure API response times (search, booking, payment)",
                    "description": "Measure API response times (search, booking, payment)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-338",
                  "name": "Ensure real-time updates (slot availability) occur with minimal delay",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-232",
                    "name": "Ensure real-time updates (slot availability) occur with minimal delay",
                    "description": "Ensure real-time updates (slot availability) occur with minimal delay",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-339",
              "name": "Scalability Testing",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-340",
                  "name": "Test system performance when scaling users, data volume, and transactions",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-233",
                    "name": "Test system performance when scaling users, data volume, and transactions",
                    "description": "Test system performance when scaling users, data volume, and transactions",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "node-341",
          "name": "Security Testing",
          "type": "workpackage",
          "level": 2,
          "children": [
            {
              "id": "node-342",
              "name": "Authentication & Authorization",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-343",
                  "name": "Test login security (invalid credentials, brute-force protection)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-234",
                    "name": "Test login security (invalid credentials, brute-force protection)",
                    "description": "Test login security (invalid credentials, brute-force protection)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-344",
                  "name": "Validate role-based access (admin vs user permissions)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-235",
                    "name": "Validate role-based access (admin vs user permissions)",
                    "description": "Validate role-based access (admin vs user permissions)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-345",
              "name": "Data Protection",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-346",
                  "name": "Verify password hashing and encryption",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-236",
                    "name": "Verify password hashing and encryption",
                    "description": "Verify password hashing and encryption",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-347",
                  "name": "Ensure secure handling of sensitive data (payments, personal info)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-237",
                    "name": "Ensure secure handling of sensitive data (payments, personal info)",
                    "description": "Ensure secure handling of sensitive data (payments, personal info)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-348",
              "name": "Vulnerability Testing",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-349",
                  "name": "Test against SQL injection, XSS, CSRF attacks",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-238",
                    "name": "Test against SQL injection, XSS, CSRF attacks",
                    "description": "Test against SQL injection, XSS, CSRF attacks",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-350",
                  "name": "Validate input sanitization and validation",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-239",
                    "name": "Validate input sanitization and validation",
                    "description": "Validate input sanitization and validation",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-351",
              "name": "Session and Access Control",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-352",
                  "name": "Test session expiration and token security",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-240",
                    "name": "Test session expiration and token security",
                    "description": "Test session expiration and token security",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-353",
                  "name": "Validate secure logout and session invalidation",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-241",
                    "name": "Validate secure logout and session invalidation",
                    "description": "Validate secure logout and session invalidation",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-354",
              "name": "Audit and Monitoring",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-355",
                  "name": "Verify logs for user activity and admin actions",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-242",
                    "name": "Verify logs for user activity and admin actions",
                    "description": "Verify logs for user activity and admin actions",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-356",
                  "name": "Test anomaly detection and unauthorized access alerts",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-243",
                    "name": "Test anomaly detection and unauthorized access alerts",
                    "description": "Test anomaly detection and unauthorized access alerts",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            }
          ]
        },
        {
          "id": "node-357",
          "name": "User Acceptance Testing (UAT)",
          "type": "workpackage",
          "level": 2,
          "children": [
            {
              "id": "node-358",
              "name": "Customer UAT",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-359",
                  "name": "Real users test booking, navigation, and payment experience",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-244",
                    "name": "Real users test booking, navigation, and payment experience",
                    "description": "Real users test booking, navigation, and payment experience",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-360",
                  "name": "Collect feedback on usability, clarity, and convenience",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-245",
                    "name": "Collect feedback on usability, clarity, and convenience",
                    "description": "Collect feedback on usability, clarity, and convenience",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-361",
              "name": "Enterprise/Admin UAT",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-362",
                  "name": "Operators test dashboard usability and monitoring features",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-246",
                    "name": "Operators test dashboard usability and monitoring features",
                    "description": "Operators test dashboard usability and monitoring features",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-363",
                  "name": "Validate reporting accuracy and operational workflows",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-247",
                    "name": "Validate reporting accuracy and operational workflows",
                    "description": "Validate reporting accuracy and operational workflows",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-364",
              "name": "Scenario-Based Validation",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-365",
                  "name": "Test real-world cases (Full parking capacity, Failed payments, Network interruptions)",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-248",
                    "name": "Test real-world cases (Full parking capacity, Failed payments, Network interruptions)",
                    "description": "Test real-world cases (Full parking capacity, Failed payments, Network interruptions)",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-366",
              "name": "Feedback and Refinement",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-367",
                  "name": "Gather user feedback and identify issues",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-249",
                    "name": "Gather user feedback and identify issues",
                    "description": "Gather user feedback and identify issues",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                },
                {
                  "id": "node-368",
                  "name": "Implement fixes and improvements before deployment",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-250",
                    "name": "Implement fixes and improvements before deployment",
                    "description": "Implement fixes and improvements before deployment",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            },
            {
              "id": "node-369",
              "name": "UAT Sign-off",
              "type": "workpackage",
              "level": 3,
              "children": [
                {
                  "id": "node-370",
                  "name": "Obtain formal approval from stakeholders confirming system readiness",
                  "type": "activity",
                  "level": 4,
                  "activity": {
                    "id": "act-251",
                    "name": "Obtain formal approval from stakeholders confirming system readiness",
                    "description": "Obtain formal approval from stakeholders confirming system readiness",
                    "duration": "TBD",
                    "resources": "TBD",
                    "risks": "TBD",
                    "dependencies": []
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "node-371",
      "name": "PHASE 5: DEPLOYMENT AND RELEASE",
      "type": "phase",
      "level": 1,
      "children": [
        {
          "id": "node-372",
          "name": "Deployment and Launch",
          "type": "workpackage",
          "level": 2,
          "children": [
            {
              "id": "node-373",
              "name": "Prepare production environment",
              "type": "activity",
              "level": 3,
              "activity": {
                "id": "act-252",
                "name": "Prepare production environment",
                "description": "Prepare production environment",
                "duration": "TBD",
                "resources": "TBD",
                "risks": "TBD",
                "dependencies": []
              }
            },
            {
              "id": "node-374",
              "name": "Migrate and validate production data",
              "type": "activity",
              "level": 3,
              "activity": {
                "id": "act-253",
                "name": "Migrate and validate production data",
                "description": "Migrate and validate production data",
                "duration": "TBD",
                "resources": "TBD",
                "risks": "TBD",
                "dependencies": []
              }
            },
            {
              "id": "node-375",
              "name": "Deploy customer application to app stores and platforms",
              "type": "activity",
              "level": 3,
              "activity": {
                "id": "act-254",
                "name": "Deploy customer application to app stores and platforms",
                "description": "Deploy customer application to app stores and platforms",
                "duration": "TBD",
                "resources": "TBD",
                "risks": "TBD",
                "dependencies": []
              }
            },
            {
              "id": "node-376",
              "name": "Deploy enterprise dashboard to production servers",
              "type": "activity",
              "level": 3,
              "activity": {
                "id": "act-255",
                "name": "Deploy enterprise dashboard to production servers",
                "description": "Deploy enterprise dashboard to production servers",
                "duration": "TBD",
                "resources": "TBD",
                "risks": "TBD",
                "dependencies": []
              }
            },
            {
              "id": "node-377",
              "name": "Conduct post-deployment smoke testing",
              "type": "activity",
              "level": 3,
              "activity": {
                "id": "act-256",
                "name": "Conduct post-deployment smoke testing",
                "description": "Conduct post-deployment smoke testing",
                "duration": "TBD",
                "resources": "TBD",
                "risks": "TBD",
                "dependencies": []
              }
            },
            {
              "id": "node-378",
              "name": "Execute go-live checklist and launch approval",
              "type": "activity",
              "level": 3,
              "activity": {
                "id": "act-257",
                "name": "Execute go-live checklist and launch approval",
                "description": "Execute go-live checklist and launch approval",
                "duration": "TBD",
                "resources": "TBD",
                "risks": "TBD",
                "dependencies": []
              }
            }
          ]
        },
        {
          "id": "node-379",
          "name": "Training and Handover",
          "type": "workpackage",
          "level": 2,
          "children": [
            {
              "id": "node-380",
              "name": "Prepare user manuals and help documentation",
              "type": "activity",
              "level": 3,
              "activity": {
                "id": "act-258",
                "name": "Prepare user manuals and help documentation",
                "description": "Prepare user manuals and help documentation",
                "duration": "TBD",
                "resources": "TBD",
                "risks": "TBD",
                "dependencies": []
              }
            },
            {
              "id": "node-381",
              "name": "Prepare system administrator and operator guides",
              "type": "activity",
              "level": 3,
              "activity": {
                "id": "act-259",
                "name": "Prepare system administrator and operator guides",
                "description": "Prepare system administrator and operator guides",
                "duration": "TBD",
                "resources": "TBD",
                "risks": "TBD",
                "dependencies": []
              }
            },
            {
              "id": "node-382",
              "name": "Conduct training sessions for end users",
              "type": "activity",
              "level": 3,
              "activity": {
                "id": "act-260",
                "name": "Conduct training sessions for end users",
                "description": "Conduct training sessions for end users",
                "duration": "TBD",
                "resources": "TBD",
                "risks": "TBD",
                "dependencies": []
              }
            },
            {
              "id": "node-383",
              "name": "Conduct training sessions for enterprise operators and admins",
              "type": "activity",
              "level": 3,
              "activity": {
                "id": "act-261",
                "name": "Conduct training sessions for enterprise operators and admins",
                "description": "Conduct training sessions for enterprise operators and admins",
                "duration": "TBD",
                "resources": "TBD",
                "risks": "TBD",
                "dependencies": []
              }
            },
            {
              "id": "node-384",
              "name": "Conduct system handover to operations team",
              "type": "activity",
              "level": 3,
              "activity": {
                "id": "act-262",
                "name": "Conduct system handover to operations team",
                "description": "Conduct system handover to operations team",
                "duration": "TBD",
                "resources": "TBD",
                "risks": "TBD",
                "dependencies": []
              }
            },
            {
              "id": "node-385",
              "name": "Obtain handover acceptance and sign-off",
              "type": "activity",
              "level": 3,
              "activity": {
                "id": "act-263",
                "name": "Obtain handover acceptance and sign-off",
                "description": "Obtain handover acceptance and sign-off",
                "duration": "TBD",
                "resources": "TBD",
                "risks": "TBD",
                "dependencies": []
              }
            }
          ]
        },
        {
          "id": "node-386",
          "name": "Project Review and Evaluation",
          "type": "workpackage",
          "level": 2,
          "children": [
            {
              "id": "node-387",
              "name": "Conduct post-implementation review",
              "type": "activity",
              "level": 3,
              "activity": {
                "id": "act-264",
                "name": "Conduct post-implementation review",
                "description": "Conduct post-implementation review",
                "duration": "TBD",
                "resources": "TBD",
                "risks": "TBD",
                "dependencies": []
              }
            },
            {
              "id": "node-388",
              "name": "Evaluate project performance against timeline and budget",
              "type": "activity",
              "level": 3,
              "activity": {
                "id": "act-265",
                "name": "Evaluate project performance against timeline and budget",
                "description": "Evaluate project performance against timeline and budget",
                "duration": "TBD",
                "resources": "TBD",
                "risks": "TBD",
                "dependencies": []
              }
            },
            {
              "id": "node-389",
              "name": "Document lessons learned",
              "type": "activity",
              "level": 3,
              "activity": {
                "id": "act-266",
                "name": "Document lessons learned",
                "description": "Document lessons learned",
                "duration": "TBD",
                "resources": "TBD",
                "risks": "TBD",
                "dependencies": []
              }
            },
            {
              "id": "node-390",
              "name": "Prepare final project report",
              "type": "activity",
              "level": 3,
              "activity": {
                "id": "act-267",
                "name": "Prepare final project report",
                "description": "Prepare final project report",
                "duration": "TBD",
                "resources": "TBD",
                "risks": "TBD",
                "dependencies": []
              }
            },
            {
              "id": "node-391",
              "name": "Present outcomes to stakeholders",
              "type": "activity",
              "level": 3,
              "activity": {
                "id": "act-268",
                "name": "Present outcomes to stakeholders",
                "description": "Present outcomes to stakeholders",
                "duration": "TBD",
                "resources": "TBD",
                "risks": "TBD",
                "dependencies": []
              }
            }
          ]
        },
        {
          "id": "node-392",
          "name": "Project Closure",
          "type": "workpackage",
          "level": 2,
          "children": [
            {
              "id": "node-393",
              "name": "Archive all project documentation and source files",
              "type": "activity",
              "level": 3,
              "activity": {
                "id": "act-269",
                "name": "Archive all project documentation and source files",
                "description": "Archive all project documentation and source files",
                "duration": "TBD",
                "resources": "TBD",
                "risks": "TBD",
                "dependencies": []
              }
            },
            {
              "id": "node-394",
              "name": "Close out contracts and vendor agreements",
              "type": "activity",
              "level": 3,
              "activity": {
                "id": "act-270",
                "name": "Close out contracts and vendor agreements",
                "description": "Close out contracts and vendor agreements",
                "duration": "TBD",
                "resources": "TBD",
                "risks": "TBD",
                "dependencies": []
              }
            },
            {
              "id": "node-395",
              "name": "Release project resources",
              "type": "activity",
              "level": 3,
              "activity": {
                "id": "act-271",
                "name": "Release project resources",
                "description": "Release project resources",
                "duration": "TBD",
                "resources": "TBD",
                "risks": "TBD",
                "dependencies": []
              }
            },
            {
              "id": "node-396",
              "name": "Obtain final stakeholder approval and sign-off",
              "type": "activity",
              "level": 3,
              "activity": {
                "id": "act-272",
                "name": "Obtain final stakeholder approval and sign-off",
                "description": "Obtain final stakeholder approval and sign-off",
                "duration": "TBD",
                "resources": "TBD",
                "risks": "TBD",
                "dependencies": []
              }
            },
            {
              "id": "node-397",
              "name": "Formally close the project",
              "type": "activity",
              "level": 3,
              "activity": {
                "id": "act-273",
                "name": "Formally close the project",
                "description": "Formally close the project",
                "duration": "TBD",
                "resources": "TBD",
                "risks": "TBD",
                "dependencies": []
              }
            }
          ]
        }
      ]
    }
  ]
} as WBSNode;
