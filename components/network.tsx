import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wifi, Globe, Smartphone, Router } from "lucide-react"

export function NetworkSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Network Coverage</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our extensive network infrastructure provides reliable connectivity across multiple regions and
              technologies.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 mb-12">
          <Card className="border-2">
            <CardHeader>
              <Globe className="h-10 w-10 text-emerald-600 mb-2" />
              <CardTitle>National Coverage</CardTitle>
              <CardDescription>
                Comprehensive network coverage spanning major metropolitan areas and rural communities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Fiber Coverage</span>
                  <Badge variant="secondary">85% National</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">5G Network</span>
                  <Badge variant="secondary">70% Major Cities</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">4G LTE</span>
                  <Badge variant="secondary">98% Coverage</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <Router className="h-10 w-10 text-emerald-600 mb-2" />
              <CardTitle>Network Performance</CardTitle>
              <CardDescription>
                Industry-leading performance metrics ensuring reliable and fast connectivity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Average Speed</span>
                  <Badge variant="secondary">1 Gbps+</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Network Uptime</span>
                  <Badge variant="secondary">99.9%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Latency</span>
                  <Badge variant="secondary">{"<5ms"}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <div className="flex flex-col items-center text-center p-4">
            <Wifi className="h-8 w-8 text-emerald-600 mb-2" />
            <h3 className="font-semibold">WiFi 6</h3>
            <p className="text-sm text-gray-600">Latest wireless technology</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <Smartphone className="h-8 w-8 text-emerald-600 mb-2" />
            <h3 className="font-semibold">5G Ready</h3>
            <p className="text-sm text-gray-600">Next-gen mobile networks</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <Globe className="h-8 w-8 text-emerald-600 mb-2" />
            <h3 className="font-semibold">Global Reach</h3>
            <p className="text-sm text-gray-600">International connectivity</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <Router className="h-8 w-8 text-emerald-600 mb-2" />
            <h3 className="font-semibold">Enterprise Grade</h3>
            <p className="text-sm text-gray-600">Business-class infrastructure</p>
          </div>
        </div>
      </div>
    </section>
  )
}
