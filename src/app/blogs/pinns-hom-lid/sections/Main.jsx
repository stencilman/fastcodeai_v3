"use client";
import React from "react";
import Image from "next/image";
import BlogArticleLayout from "../../components/BlogArticleLayout";

const TOPICS = [
  { id: "topic1", label: "1. What is Lid Driven Cavity (LDC)?" },
  { id: "topic2", label: "2. Steps" },
];

const RECOMMENDED_SLUGS = ["thesis-reality", "pinns-hom-lid", "pinns-hom2d"];

const Main = () => {
  return (
    <BlogArticleLayout topics={TOPICS} recommendedSlugs={RECOMMENDED_SLUGS}>
      {(topicRefs) => (
        <>
          <div className="p-[40px] bg-white rounded-[20px] shadow-[0px_3px_6px_#00000029]">
            <Image
              src="/blogs/pinns-lid/hero/pinns-lid-hero.png"
              width="744"
              height="355"
              alt=""
            />
          </div>
          <p className="text-[#9eb3cfcb] text-center text-base font-bwmss01">
            The MSE loss is supervised loss, and Internal points loss and
            pressure Poisson derived from Navier-Stokes equation
          </p>
          <p className="text-[#9EB3CF] text-lg font-bwmss01">
            In the last blog, we discussed about heat transfer through 2D plate
            and discussed about how it can be implemented in PyTorch by
            integrating heat equation for 2D plate. In this blog post, we will
            be discussing about heat transfer through Lid Driven Cavity. So{" "}
            {"let's"} get started..
          </p>

          {/* topic-1 */}
          <div
            id="topic1"
            ref={(el) => (topicRefs.current[0] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              What is Lid Driven Cavity (LDC)?
            </h4>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              A lid-driven cavity is a classic fluid dynamics problem used to
              study flow patterns in a square or rectangular box where one of
              the walls (typically the top wall) moves at a constant velocity,
              driving the fluid inside the cavity. The remaining walls of the
              cavity are stationary and typically no-slip boundary conditions
              are applied, meaning the fluid velocity at these walls is zero.
              This setup creates complex internal circulating flows as the
              motion of the top wall induces shear in the fluid. The lid-driven
              cavity problem is widely used in computational fluid dynamics to
              validate numerical methods and study viscous flow behavior in
              enclosed spaces.
            </p>

            <div className="flex w-full gap-[5%]">
              <Image
                className="rounded-[20px] w-[100%]"
                src="/blogs/pinns-lid/content/pinns-lid-1.png"
                width="400"
                height="400"
                alt=""
              />
            </div>
            <p className="text-[#9eb3cfcb] text-center text-base font-bwmss01">
              Example image of how a lid driven cavity looks like
            </p>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Unlike 2D plate which had heat propagation through all 4 surfaces,
              in LDC we only have fluid movement through one surface only which
              is usually the upper surface. Therefore, the physics equation for
              this problem is slightly different as shown in below figure:
            </p>
            <div className="p-[40px] bg-white rounded-[20px] shadow-[0px_3px_6px_#00000029]">
              <Image
                className="rounded-[20px] w-[100%]"
                src="/blogs/pinns-lid/content/pinns-lid-2.png"
                width="400"
                height="400"
                alt=""
              />
            </div>
            <p className="text-[#9eb3cfcb] text-center text-base font-bwmss01">
              Pressure {"Poisson's"} equation. Here u and v are velocity
              components in x and y direction and p is pressure.
            </p>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              We will be using the above equation to calculate the pressure
              values at different points. If you want to look into full
              derivation of the above equation, you can refer to the following
              link:
              <a
                href="https://nbviewer.org/github/barbagroup/CFDPython/blob/master/lessons/14_Step_11.ipynb"
                target="_blank"
                className="text-blue-600"
              >
                <i>Pressure {"Poisson's"} Equation.</i>
              </a>
            </p>
          </div>
          {/* topic-2 */}
          <div
            id="topic2"
            ref={(el) => (topicRefs.current[1] = el)}
            className="flex flex-col gap-[20px]"
          >
            <h4 className="text-white text-2xl font-aeonik tracking-wide">
              Steps
            </h4>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              First, {"we'll"} import the required libraries. Our model creation
              will leverage PyTorch, while the Latin Hypercube sampling method
              will be used to generate both boundary and internal points.
            </p>

            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                {"import numpy as np"}
                <br />
                {"from itertools import product"}
                <br />
                {"from mpl_toolkits.mplot3d import Axes3D"}
                <br />
                {"from matplotlib import pyplot as plt, cm"}
                <br />
                {"from scipy.stats.qmc import LatinHypercube"}
                <br />
                {"%matplotlib inline"}
                <br />
                <br />
                {"import torch"}
                <br />
                {"import torch.nn as nn"}
                <br />
                {"from torchsummary import summary"}
                <br />
                {"from torch.utils.data import Dataset, DataLoader"}
                <br />
              </p>
            </div>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Next we will be initializing boundary points to generate the
              points on top surface.
            </p>

            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                {"vertex1 = np.array([0, 0])"}
                <br />
                {"vertex2 = np.array([0, 2])"}
                <br />
                {"vertex3 = np.array([2, 2])"}
                <br />
                {"vertex4 = np.array([2, 0])"}
                <br />
                <br />
                {"left_edge = np.array([vertex1, vertex2])"}
                <br />
                {"top_edge = np.array([vertex2, vertex3])"}
                <br />
                {"right_edge = np.array([vertex3, vertex4])"}
                <br />
                {"bottom_edge = np.array([vertex4,  vertex1])"}
                <br />
                <br />
                {"lhc = LatinHypercube(d=1)"}
                <br />
                <br />
                {"n_samples = 25"}
                <br />
                {"samples = lhc.random(n=n_samples)"}
                <br />
                <br />
                {"def get_boundary_points(edge, t_values):"}
                <br />
                {"return [edge[0] + t * (edge[1] - edge[0]) for t in t_values]"}
                <br />
                <br />
                {
                  "top_points, bottom_points, left_points, right_points = [], [], [], []"
                }
                <br />
                <br />
                {
                  "top_points.extend( get_boundary_points(top_edge, samples.flatten()))"
                }
                <br />
                {
                  "bottom_points.extend( get_boundary_points(bottom_edge, samples.flatten()))"
                }
                <br />
                {
                  "left_points.extend( get_boundary_points(left_edge, samples.flatten()))"
                }
                <br />
                {
                  "right_points.extend( get_boundary_points( ight_edge, samples.flatten()))"
                }
                <br />
              </p>
            </div>

            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                {"import matplotlib.pyplot as plt"}
                <br />
                <br />
                {
                  "vertices = np.array([vertex1, vertex2, vertex3, vertex4, vertex1])"
                }
                <br />
                {"plt.plot(vertices[:,0], vertices[:,1], 'r-')"}
                <br />
                <br />
                {"for point in top_points:"}
                <br />
                {"plt.plot(point[0], point[1], 'bo')"}
                <br />
                <br />

                {"plt.xlabel('X')"}
                <br />
                {"plt.ylabel('Y')"}
                <br />
                {"plt.title('Random Points on 2D square Edges')"}
                <br />
                {"plt.axis('equal')"}
                <br />
                {"plt.legend()"}
                <br />
                {"plt.show()"}
                <br />
              </p>
            </div>

            <div className="flex w-full gap-[5%]">
              <Image
                className="rounded-[20px] w-[100%]"
                src="/blogs/pinns-lid/content/pinns-lid-3.png"
                width="400"
                height="400"
                alt=""
              />
            </div>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Next step will be to generate random points inside this Lid Driven
              Cavity:
            </p>

            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                {"def random_point_in_triangle(v1, v2, v3):"}
                <br />
                {"weights = np.random.rand(3)"}
                <br />
                {"weights /= weights.sum()"}
                <br />
                {
                  "x = weights[0] * v1[0] + weights[1] * v2[0] + weights[2] * v3[0]"
                }
                <br />
                {
                  "y = weights[0] * v1[1] + weights[1] * v2[1] + weights[2] * v3[1]"
                }
                <br />
                {"return [x, y]"}
                <br />
                <br />

                {
                  "def generate_random_points_in_rhombus(vertex1, vertex2, vertex3, vertex4, n):"
                }
                <br />
                {"points = []"}
                <br />
                {"for _ in range(n):"}
                <br />
                {"if np.random.rand() < 0.5:"}
                <br />
                {"point = random_point_in_triangle(vertex1, vertex2, vertex3)"}
                <br />
                {"else:"}
                <br />
                {"point = random_point_in_triangle(vertex1, vertex3, vertex4)"}
                <br />
                {"points.append(point)"}
                <br />
                {"return np.array(points)"}
                <br />
              </p>
            </div>

            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                {
                  "internal_points = generate_random_points_in_rhombus(vertex1, vertex2, vertex3, vertex4, 10000)"
                }
              </p>
            </div>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Then we will be generating some ground truth points using FDM
              method with pressure Poisson equation that will act as additional
              set of inputs while calculating the loss.
            </p>
            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                {"nx = 41"}
                <br />
                {"ny = 41"}
                <br />
                {"nt = 100"}
                <br />
                {"nit = 50"}
                <br />
                {"c = 1"}
                <br />
                {"dx = 2 / (nx - 1)"}
                <br />
                {"dy = 2 / (ny - 1)"}
                <br />
                {"x = np.linspace(0, 2, nx)"}
                <br />
                {"y = np.linspace(0, 2, ny)"}
                <br />
                {"X, Y = np.meshgrid(x, y)"}
                <br />
                <br />
                {"rho = 1"}
                <br />
                {"nu = .1"}
                <br />
                {"dt = .001"}
                <br />
                <br />
                {"u = np.zeros((ny, nx))"}
                <br />
                {"v = np.zeros((ny, nx))"}
                <br />
                {"p = np.zeros((ny, nx))"}
                <br />
                {"b = np.zeros((ny, nx))"}
                <br />
              </p>
            </div>

            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                {"def build_up_b(b, rho, dt, u, v, dx, dy):"}
                <br />
                <br />
                {"b[1:-1, 1:-1] = ("}
                <br />
                {"rho *"}
                <br />
                {"("}
                <br />
                &nbsp;{"1 / dt *"}
                <br />
                {"("}
                <br />
                &nbsp; &nbsp;{"(u[1:-1, 2:] - u[1:-1, 0:-2]) / (2 * dx) +"}
                <br />
                &nbsp; &nbsp;{"(v[2:, 1:-1] - v[0:-2, 1:-1]) / (2 * dy)"}
                <br />
                {") -"}
                <br />
                {"("}
                <br />
                &nbsp;{"(u[1:-1, 2:] - u[1:-1, 0:-2]) / (2 * dx)"}
                <br />
                &nbsp;{")**2 -"}
                <br />
                {"2 *"}
                <br />
                {"("}
                <br />
                &nbsp; &nbsp;{"(u[2:, 1:-1] - u[0:-2, 1:-1]) / (2 * dy) *"}
                <br />
                &nbsp; &nbsp;{"(v[1:-1, 2:] - v[1:-1, 0:-2]) / (2 * dx)"}
                <br />
                {") -"}
                <br />
                {"("}
                <br />
                &nbsp; &nbsp;{"(v[2:, 1:-1] - v[0:-2, 1:-1]) / (2 * dy)"}
                <br />
                {")**2"}
                <br />
                {")"}
                <br />
                {")"}
                <br />
                <br />
                {"return b"}
                <br />
              </p>
            </div>

            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                {"def pressure_poisson(p, dx, dy, b):"}
                <br />
                {"pn = np.empty_like(p)"}
                <br />
                {"pn = p.copy()"}
                <br />
                <br />
                {"for q in range(nit):"}
                <br />
                {"pn = p.copy()"}
                <br />
                {
                  "p[1:-1, 1:-1] = (((pn[1:-1, 2:] + pn[1:-1, 0:-2]) * dy**2 + (pn[2:, 1:-1] + pn[0:-2, 1:-1]) * dx**2) / (2 * (dx**2 + dy**2)) - dx**2 * dy**2 / (2 * (dx**2 + dy**2)) * b[1:-1,1:-1])"
                }
                <br />
                <br />
                {"p[:, -1] = p[:, -2] # dp/dx = 0 at x = 2"}
                <br />
                {"p[0, :] = p[1, :]   # dp/dy = 0 at y = 0"}
                <br />
                {"p[:, 0] = p[:, 1]   # dp/dx = 0 at x = 0"}
                <br />
                {"p[-1, :] = 0        # p = 0 at y = 2"}
                <br />
                <br />
                {"return p"}
              </p>
            </div>

            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                {"def cavity_flow(nt, u, v, dt, dx, dy, p, rho, nu):"}
                <br />
                {"un = np.empty_like(u)"}
                <br />
                {"vn = np.empty_like(v)"}
                <br />
                {"b = np.zeros((ny, nx))"}
                <br />
                <br />
                {"for n in range(nt):"}
                <br />
                {"un = u.copy()"}
                <br />
                {"vn = v.copy()"}
                <br />
                <br />
                {"b = build_up_b(b, rho, dt, u, v, dx, dy)"} <br />
                {"p = pressure_poisson(p, dx, dy, b)"}
                <br />
                <br />
                {
                  "u[1:-1, 1:-1] = (un[1:-1, 1:-1] - un[1:-1, 1:-1] * dt / dx * (un[1:-1, 1:-1] - un[1:-1, 0:-2]) - vn[1:-1, 1:-1] * dt / dy * (un[1:-1, 1:-1] - un[0:-2, 1:-1]) - dt / (2 * rho * dx) * (p[1:-1, 2:] - p[1:-1, 0:-2]) + nu * (dt / dx**2 * (un[1:-1, 2:] - 2 * un[1:-1, 1:-1] + un[1:-1, 0:-2]) + dt / dy**2 * (un[2:, 1:-1] - 2 * un[1:-1, 1:-1] + un[0:-2, 1:-1])))"
                }
                <br />
                <br />
                {
                  " v[1:-1,1:-1] = (vn[1:-1, 1:-1] - un[1:-1, 1:-1] * dt / dx * (vn[1:-1, 1:-1] - vn[1:-1, 0:-2]) -  vn[1:-1, 1:-1] * dt / dy * (vn[1:-1, 1:-1] - vn[0:-2, 1:-1]) - dt / (2 * rho * dy) * (p[2:, 1:-1] - p[0:-2, 1:-1]) + nu * (dt / dx**2 * (vn[1:-1, 2:] - 2 * vn[1:-1, 1:-1] + vn[1:-1, 0:-2]) +  dt / dy**2 * (vn[2:, 1:-1] - 2 * vn[1:-1, 1:-1] + vn[0:-2, 1:-1])))"
                }
                <br />
                <br />
                {" u[0, :]  = 0"}
                <br />
                {" u[:, 0]  = 0"}
                <br />
                {"u[:, -1] = 0"}
                <br />
                {"u[-1, :] = 1    # set velocity on cavity lid equal to 1"}
                <br />
                {" v[0, :]  = 0"}
                <br />
                {"v[-1, :] = 0"}
                <br />
                {" v[:, 0]  = 0"}
                <br />
                {"v[:, -1] = 0"}
                <br />
                <br />
                {"return u, v, p"}
                <br />
              </p>
            </div>
            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                {"u, v, p = cavity_flow(nt, u, v, dt, dx, dy, p, rho, nu)"}
              </p>
            </div>

            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                {"x = np.linspace(0, 2, nx)"}
                <br />
                {"y = np.linspace(0, 2, ny)"}
                <br />
                {"X, Y = np.meshgrid(x, y)"}
                <br />
                {"xx = np.linspace(0, X[0,:].shape[0], 22)[1:-1].astype(int)"}
                <br />
                {"yy = np.linspace(0, Y[0,:].shape[0], 22)[1:-1].astype(int)"}
                <br />
                <br />
                {"points = np.array(list(product(xx, yy)))"}
                <br />
                {"pp = p[points[:,0], points[:,1]]"}
                <br />
                {"xx = points[:,1]"}
                <br />
                {"yy = points[:,0]"}
                <br />
                <br />
                {"r_x = torch.tensor(X[0,:][xx], dtype = torch.float32)"}
                <br />
                {"r_y = torch.tensor(Y[:,0][yy], dtype = torch.float32)"}
                <br />
                {"r_p = torch.tensor(pp, dtype = torch.float32).reshape(-1,1)"}
                <br />
                <br />
                {"p_data_X = torch.column_stack([r_x, r_y])"}
                <br />
                {"p_data_Y = r_p.reshape(-1, 1)"}
                <br />
                {"plt.scatter(r_x, r_y, c=r_p)"}
                <br />
                {"plt.colorbar()"}
                <br />
              </p>
            </div>

            <div className="flex w-full gap-[5%]">
              <Image
                className="rounded-[20px] w-[100%]"
                src="/blogs/pinns-lid/content/pinns-lid-4.png"
                width="400"
                height="400"
                alt=""
              />
            </div>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              In the next step, we will be defining the dataset classes for
              Boundary, internal and points derived from pressure Poisson
              equation.
            </p>

            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                {"class EdgePointsDataset(Dataset):"}
                <br />
                {"def __init__(self, points):"}
                <br />
                {"self.X = torch.tensor(points[0].astype(np.float32))"}
                <br />
                {"self.y = torch.tensor(points[1].astype(np.float32))"}
                <br />
                <br />
                {"def __len__(self):"}
                <br />
                {"return len(self.X)"}
                <br />
                <br />
                {"def __getitem__(self, idx):"}
                <br />
                {"return self.X[idx], self.y[idx]"}
                <br />
              </p>
            </div>

            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                {"class InternalPointsDataset(Dataset):"}
                <br />
                {"def __init__(self, X):"}
                <br />
                {
                  "self.X = torch.tensor(X.astype(np.float32), requires_grad=True)"
                }
                <br />
                <br />
                {"def __len__(self):"}
                <br />
                {"return len(self.X)"}
                <br />
                <br />
                {"def __getitem__(self, idx):"}
                <br />
                {"return self.X[idx]"}
                <br />
              </p>
            </div>

            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                {"class PressurePointsDataset(Dataset):"}
                <br />
                {"def __init__(self, points):"}
                <br />
                {"self.X = points[0]"}
                <br />
                {"self.y = points[1]"}
                <br />
                <br />
                {"def __len__(self):"}
                <br />
                {"return len(self.X)"}
                <br />
                <br />
                {"def __getitem__(self, idx):"}
                <br />
                {"return self.X[idx], self.y[idx]"}
                <br />
              </p>
            </div>

            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                {"# Creating points list"}
                <br />
                {
                  "edge_points_X = np.array(top_points + bottom_points + left_points + right_points)"
                }
                <br />
                {
                  "edge_points_y = np.array([[1.0, 0.0, 0.0]]*len(top_points) + [[0.0, 0.0, 0.0]]*len(bottom_points) + [[0.0, 0.0, 0.0]]*len(left_points) + [[0.0, 0.0, 0.0]]*len(right_points))"
                }
                <br />
                {"edge_points = [edge_points_X, edge_points_y]"}
                <br />
                {"pressure_points = [p_data_X, p_data_Y]"}
                <br />
                <br />
                {"# Dataset class"}
                <br />
                {"edge_points_dataset = EdgePointsDataset(edge_points)"}
                <br />
                {
                  "internal_points_dataset = InternalPointsDataset(internal_points)"
                }
                <br />
                {
                  "pressure_points_dataset = PressurePointsDataset(pressure_points)"
                }
                <br />
                <br />
                {"# Dataloader"}
                <br />
                {
                  "edge_points_dataloader = DataLoader(edge_points_dataset, batch_size=10, shuffle=True)"
                }
                <br />
                {
                  "internal_points_dataloader = DataLoader(internal_points_dataset, batch_size=1000, shuffle=True)"
                }
                <br />
                {
                  "pressure_points_dataloader = DataLoader(pressure_points_dataset, batch_size=40, shuffle=True)"
                }
                <br />
              </p>
            </div>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              In the next step, we will be creating the Neural network class.
            </p>
            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                {"class NeuralNet(nn.Module):"}
                <br />
                {
                  "def __init__(self, input_neurons, hidden_neurons, output_neurons):"
                }
                <br />
                {"super(NeuralNet, self).__init__()"}
                <br />
                {"self.input_shape = input_neurons"}
                <br />
                {"self.output_shape = output_neurons"}
                <br />
                {"self.hidden_neurons = hidden_neurons"}
                <br />
                <br />
                {"self.input_layer = nn.Linear(input_neurons, hidden_neurons)"}
                <br />
                {
                  "self.hidden_layer1 = nn.Linear(hidden_neurons, hidden_neurons)"
                }
                <br />
                {
                  "self.hidden_layer2 = nn.Linear(hidden_neurons, hidden_neurons)"
                }
                <br />
                {
                  "self.hidden_layer3 = nn.Linear(hidden_neurons, hidden_neurons)"
                }
                <br />
                {
                  "self.output_layer = nn.Linear(hidden_neurons, output_neurons)"
                }
                <br />
                <br />
                {"self.tanh = nn.Tanh()"}
                <br />
                <br />
                {"def forward(self, x):"}
                <br />
                {"x = self.input_layer(x)"}
                <br />
                {"x = self.tanh(x)"}
                <br />
                {"x = self.hidden_layer1(x)"}
                <br />
                {"x = self.tanh(x)"}
                <br />
                {"x = self.hidden_layer2(x)"}
                <br />
                {"x = self.tanh(x)"}
                <br />
                {"x = self.hidden_layer3(x)"}
                <br />
                {"x = self.tanh(x)"}
                <br />
                {"x = self.output_layer(x)"}
                <br />
                <br />
                {"return x"}
                <br />
              </p>
            </div>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Initializing model parameters and other hyperparameters
            </p>
            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                {"device = 'cuda' if torch.cuda.is_available() else 'cpu'"}
                <br />
                {"model = NeuralNet(2, 10, 3).to(device)"}
                <br />
                {"optimizer = torch.optim.Adam(model.parameters(), lr = 5e-4)"}
                <br />
                {"loss_fn = nn.MSELoss()"}
                <br />
              </p>
            </div>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Printing the model summary
            </p>
            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                {"summary(model, (1, 2))"}
              </p>
            </div>

            <div className="flex w-full gap-[5%]">
              <Image
                className="rounded-[20px] w-[100%]"
                src="/blogs/pinns-lid/content/pinns-lid-5.png"
                width="400"
                height="400"
                alt=""
              />
            </div>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              Training the model on the above initialized points.
            </p>
            <div className="text-[#9EB3CF] text-lg font-bwmss01">
              <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                {
                  "loss_values, edge_loss_values, internal_loss_values, pressure_loss_values = [], [], [], []"
                }
                <br />
                {"epoch = 10000"}
                <br />
                <br />
                {"for i in range(epoch):"}
                <br />
                {
                  "total_loss, edge_loss_total, internal_points_loss_total, pressure_points_loss_total = 0.0, 0.0, 0.0, 0.0"
                }
                <br />
                {
                  "for (edge_points, outputs), internal_points, (pressure_points, pressure_val) in zip(edge_points_dataloader, internal_points_dataloader, pressure_points_dataloader):"
                }
                <br />
                {"optimizer.zero_grad()"}
                <br />
                <br />
                {"edge_points = edge_points.to(device)"}
                <br />
                {"outputs = outputs.to(device)"}
                <br />
                {"out = model(edge_points)"}
                <br />
                {"edge_points_loss = loss_fn(out, outputs)"}
                <br />
                <br />
                {"internal_points = internal_points.to(device)"}
                <br />
                {"out_internal = model(internal_points)"}
                <br />
                <br />
                {
                  "du_dx = torch.autograd.grad(out_internal[:,0], internal_points, torch.ones_like(out_internal[:,0]), create_graph=True)[0][:, 0]"
                }
                <br />
                {
                  "du2_dx2 = torch.autograd.grad(du_dx, internal_points, torch.ones_like(du_dx), create_graph=True)[0][:, 0]"
                }
                <br />
                <br />
                {
                  "du_dy = torch.autograd.grad(out_internal[:,0], internal_points, torch.ones_like(out_internal[:,0]), create_graph=True)[0][:, 1]"
                }
                <br />
                {
                  "du2_dy2 = torch.autograd.grad(du_dy, internal_points, torch.ones_like(du_dy), create_graph=True)[0][:, 1]"
                }
                <br />
                <br />
                {
                  "dv_dx = torch.autograd.grad(out_internal[:,1], internal_points, torch.ones_like(out_internal[:,1]), create_graph=True)[0][:, 0]"
                }
                <br />
                {
                  "dv2_dx2 = torch.autograd.grad(dv_dx, internal_points, torch.ones_like(dv_dx), create_graph=True)[0][:, 0]"
                }
                <br />
                <br />
                {
                  "dv_dy = torch.autograd.grad(out_internal[:,1], internal_points, torch.ones_like(out_internal[:,1]), create_graph=True)[0][:, 1]"
                }
                <br />
                {
                  "dv2_dy2 = torch.autograd.grad(dv_dy, internal_points, torch.ones_like(dv_dy), create_graph=True)[0][:, 1]"
                }
                <br />
                <br />
                {
                  "dp_dx = torch.autograd.grad(out_internal[:,2], internal_points, torch.ones_like(out_internal[:,2]), create_graph=True)[0][:,0]"
                }
                <br />
                {
                  "dp2_dx2 = torch.autograd.grad(dp_dx, internal_points, torch.ones_like(dp_dx), create_graph=True)[0][:, 0]"
                }
                <br />
                <br />
                {
                  "dp_dy = torch.autograd.grad(out_internal[:,2], internal_points, torch.ones_like(out_internal[:,2]), create_graph=True)[0][:,1]"
                }
                <br />
                {
                  "dp2_dy2 = torch.autograd.grad(dp_dy, internal_points, torch.ones_like(dp_dy), create_graph=True)[0][:,1]"
                }
                <br />
                <br />
                {"u = out_internal[:,0]"}
                <br />
                {"v = out_internal[:,1]"}
                <br />
                {"p = out_internal[:,2]"}
                <br />
                <br />
                {
                  "eq1 = u * du_dx + v * du_dy + (1/rho) * dp_dx - nu * (du2_dx2+du2_dy2)"
                }
                <br />
                {
                  "eq2 = u * dv_dx + v * dv_dy + (1/rho) * dp_dy - nu * (dv2_dx2+dv2_dy2)"
                }
                <br />
                {"eq3 = du_dx + dv_dy"}
                <br />
                <br />
                {
                  "internal_points_loss = torch.mean(eq1**2) + torch.mean(eq2**2)  + torch.mean(eq3**2)"
                }
                <br />
                <br />
                {"pressure_points = pressure_points.to(device)"}
                <br />
                {"pressure_val = pressure_val.to(device)"}
                <br />
                {"out_pressure = model(pressure_points)"}
                <br />
                {
                  "pressure_loss = loss_fn(out_pressure[:, 2].reshape(40, 1), pressure_val)"
                }
                <br />
                <br />
                {
                  "loss = edge_points_loss + internal_points_loss + pressure_loss"
                }
                <br />
                <br />
                {"loss.backward()"}
                <br />
                {"optimizer.step()"}
                <br />
                <br />
                {"total_loss += loss.item()"}
                <br />
                {"edge_loss_total += edge_points_loss.item()"}
                <br />
                {"internal_points_loss_total += internal_points_loss.item()"}
                <br />
                {"pressure_points_loss_total += pressure_loss.item()"}
                <br />
                <br />
                {"loss_values.append(total_loss)"}
                <br />
                {"edge_loss_values.append(edge_loss_total)"}
                <br />
                {"internal_loss_values.append(internal_points_loss_total)"}
                <br />
                {"pressure_loss_values.append(pressure_points_loss_total)"}
                <br />
                <br />
                {"if (i+1) % 1000 == 0:"}
                <br />
                {`print(f"Epoch {i+1}, Training Loss: {total_loss}, Edge Points Loss: {edge_loss_total}, Internal Points Loss: {internal_points_loss_total}, Pressure Points Loss: {pressure_points_loss_total}")`}
                <br />
                <br />
                {`plt.plot(loss_values, label="netloss")`}
                <br />
                {`plt.plot(edge_loss_values, label="loss1")`}
                <br />
                {`plt.plot(internal_loss_values, label="loss2")`}
                <br />
                {`plt.plot(pressure_loss_values, label="loss3")`}
                <br />
                {"plt.legend()"}
                <br />
              </p>
            </div>

            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              The below plot shows the loss curve for all the three types of
              losses that were calculated while training the above model.
            </p>
            <div className="flex w-full gap-[5%]">
              <Image
                className="rounded-[20px] w-[100%]"
                src="/blogs/pinns-lid/content/pinns-lid-6.png"
                width="400"
                height="400"
                alt=""
              />
            </div>
            <p className="text-[#9eb3cfcb] text-center text-base font-bwmss01">
              Loss Curves for all three losses (edge points loss, internal
              points loss and pressure points loss)
            </p>
          </div>

          {/* end topic-2 */}
        </>
      )}
    </BlogArticleLayout>
  );
};

export default Main;
