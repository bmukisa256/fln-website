<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo isset($pageTitle) ? $pageTitle . ' - ' : ''; ?>Email Subscription System</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#3b82f6',
                        secondary: '#f1f5f9',
                        accent: '#10b981',
                        destructive: '#ef4444',
                        background: '#ffffff',
                        foreground: '#0f172a',
                        'muted-foreground': '#64748b',
                        card: '#ffffff',
                        border: '#e2e8f0'
                    },
                    animation: {
                        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    }
                }
            }
        }
    </script>
    <style>
        .gradient-text {
            background: linear-gradient(to right, #3b82f6, #10b981);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .gradient-bg {
            background: linear-gradient(to bottom, #ffffff, rgba(241, 245, 249, 0.3));
        }
        
        .shadow-glow {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.25);
        }
        
        .shadow-glow:hover {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
        }
        
        .blur-circle {
            filter: blur(3rem);
        }
        
        .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
    </style>
</head>
<body class="min-h-screen bg-background text-foreground">