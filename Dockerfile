FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy necessary files from the build stage
COPY ./.next/standalone /app

# Set environment variables
ENV NODE_ENV=production

# Expose the application port (e.g., for Express.js, it's usually 3000)
EXPOSE 3000

# Start the Node.js application
CMD ["node", "server.js"]