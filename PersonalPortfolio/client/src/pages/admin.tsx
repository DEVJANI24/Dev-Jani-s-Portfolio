import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Calendar, User, MessageSquare, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function AdminPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/contact');
      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }
      const data = await response.json();
      setMessages(data);
    } catch (err) {
      setError('Failed to load messages');
      console.error('Error fetching messages:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading messages...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-6 text-center">
            <MessageSquare className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-900 mb-2">Error Loading Messages</h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <Button onClick={fetchMessages}>Try Again</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
              <p className="text-gray-600">View and manage contact form messages</p>
            </div>
            <Link href="/">
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Portfolio</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Mail className="w-8 h-8 text-primary" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Messages</p>
                  <p className="text-2xl font-bold text-gray-900">{messages.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <User className="w-8 h-8 text-secondary" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Unique Contacts</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {new Set(messages.map(m => m.email)).size}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Calendar className="w-8 h-8 text-accent" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Latest Message</p>
                  <p className="text-sm font-bold text-gray-900">
                    {messages.length > 0 ? formatDate(messages[messages.length - 1].createdAt) : 'No messages'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Messages */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Contact Messages</h2>
            <Button onClick={fetchMessages} variant="outline">
              Refresh
            </Button>
          </div>

          {messages.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No messages yet</h3>
                <p className="text-gray-600">
                  Contact form messages will appear here when visitors submit the form.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {messages.slice().reverse().map((message) => (
                <Card key={message.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{message.name}</CardTitle>
                          <p className="text-sm text-gray-600">{message.email}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {formatDate(message.createdAt)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700 leading-relaxed">{message.message}</p>
                    </div>
                    <div className="mt-4 flex space-x-3">
                      <Button size="sm" asChild>
                        <a href={`mailto:${message.email}?subject=Re: Your message from portfolio`}>
                          Reply via Email
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={`tel:${message.email}`}>
                          Contact
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}