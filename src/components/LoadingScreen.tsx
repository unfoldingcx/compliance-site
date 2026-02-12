import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { useBranding } from "@/hooks/useBranding";

export function LoadingScreen() {
  const { branding } = useBranding();
  const themeColor = branding?.themeColor || "#3B82F6";

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <motion.div
            animate={{
              rotate: 360,
              transition: {
                duration: 2,
                ease: "linear",
                repeat: Infinity,
              },
            }}
            className="w-16 h-16 rounded-full border-t-2 border-b-2"
            style={{ borderColor: themeColor }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Shield size={24} style={{ color: themeColor }} />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center space-y-2"
        >
          <h2 className="text-xl font-semibold">Loading Compliance Center</h2>
          <p className="text-sm text-muted-foreground">
            Preparing policies and guidelines...
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
